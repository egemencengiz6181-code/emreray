import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CtaBand, LinkArrow, PageHero, SectionHead } from "../components/Blocks";
import { ease, Reveal } from "../components/Motion";
import type { Post } from "../data/types";
import { useContent } from "../i18n/content";
import { resolveId } from "../i18n/routes";
import { useI18n } from "../i18n/useLang";
import { formatDate } from "../lib/format";
import { useTitle } from "../lib/useTitle";
import NotFound from "./NotFound";

function NewsCard({ p }: { p: Post }) {
  const { L, lang } = useI18n();
  const d = formatDate(p.date, lang);
  return (
    <Link to={L.post(p.slug)} className="ncard">
      <div className="ncard__media">
        <img src={p.image} alt="" loading="lazy" />
      </div>
      <div className="ncard__meta">
        <b>{p.category}</b>
        <span className="num">{d.short}</span>
      </div>
      <h3 className="ncard__title">{p.title}</h3>
      <p className="muted" style={{ fontSize: 15 }}>
        {p.excerpt}
      </p>
    </Link>
  );
}

export function NewsList() {
  const { t } = useI18n();
  const { posts } = useContent();
  const [cat, setCat] = useState<string | null>(null);
  useTitle(t.nav.news, t.news.lead);
  const cats = [...new Set(posts.map((p) => p.category))];
  const list = cat ? posts.filter((p) => p.category === cat) : posts;

  return (
    <>
      <PageHero
        eyebrow={t.home.newsEyebrow}
        title={t.news.title}
        lead={t.news.lead}
        image="/media/2024-12-main.webp"
        crumbs={[{ label: t.nav.news }]}
        short
      />
      <section className="section--tight">
        <div className="container">
          <div className="tabs tabs--line" role="toolbar" aria-label={t.news.filter}>
            {[null, ...cats].map((c) => (
              <button key={c ?? "all"} className="tab" aria-pressed={cat === c} onClick={() => setCat(c)}>
                {c ?? t.common.all}
                <sup className="num">{c ? posts.filter((p) => p.category === c).length : posts.length}</sup>
              </button>
            ))}
          </div>
          <motion.div layout className="news-cards" style={{ marginTop: 48 }}>
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.6, ease, delay: i * 0.05 }}
                >
                  <NewsCard p={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function NewsDetail() {
  const { slug } = useParams();
  const { t, L, lang } = useI18n();
  const { posts } = useContent();
  const post = posts.find((p) => p.slug === resolveId.post(lang, slug));
  useTitle(post?.title, post?.excerpt);
  if (!post) return <NotFound />;
  const d = formatDate(post.date, lang);
  const others = posts.filter((p) => p.slug !== post.slug);
  const minutes = Math.max(1, Math.round(post.blocks.map((b) => b.text).join(" ").split(/\s+/).length / 200));

  return (
    <>
      <PageHero
        key={post.slug}
        eyebrow={post.category}
        title={[post.title]}
        image={post.image}
        crumbs={[{ label: t.nav.news, to: L.news() }, { label: post.category }]}
        short
      />
      <section className="section">
        <div className="container article">
          <aside className="article__aside">
            <div>
              <strong>{t.news.date}</strong>
              {d.long}
            </div>
            <div>
              <strong>{t.news.category}</strong>
              {post.category}
            </div>
            <div>
              <strong>{t.news.reading}</strong>
              {minutes} {t.common.minutes}
            </div>
          </aside>
          <Reveal>
            <article className="prose">
              {post.blocks.map((b, i) =>
                b.type === "h2" ? <h2 key={i}>{b.text}</h2> : b.type === "h3" ? <h3 key={i}>{b.text}</h3> : <p key={i}>{b.text}</p>,
              )}
            </article>
          </Reveal>
        </div>
      </section>
      <section className="section section--mist">
        <div className="container">
          <SectionHead
            eyebrow={t.news.others}
            title={t.news.othersTitle}
            action={<LinkArrow to={L.news()}>{t.news.allNews}</LinkArrow>}
          />
          <div className="news-cards">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08} y={30}>
                <NewsCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
