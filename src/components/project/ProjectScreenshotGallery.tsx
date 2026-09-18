import Image from "next/image";

import type { ProjectScreenshot } from "@/types/portfolio";

export function ProjectScreenshotGallery({ screenshots }: { screenshots: ProjectScreenshot[] }) {
  return (
    <section className="detail-screens shell" aria-labelledby="screens-heading">
      <div className="screens-heading">
        <h2 id="screens-heading">App Screens</h2>
        <p>장소를 발견하고 정보를 확인한 뒤, 실제 이동 순서로 정리하는 흐름입니다.</p>
      </div>
      <div className="screens-grid">
        {screenshots.map((screenshot, index) => (
          <figure key={screenshot.src} className="screen-card">
            <div className="screen-media">
              <Image src={screenshot.src} alt={screenshot.alt} width={720} height={1280} sizes="(max-width: 800px) 78vw, 340px" />
            </div>
            <figcaption>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{screenshot.title}</h3>
                <p>{screenshot.caption}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
