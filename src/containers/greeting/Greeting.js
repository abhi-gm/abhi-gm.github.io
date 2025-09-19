import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  const heroHighlights = greeting.heroHighlights || [];

  return (
    <Fade bottom duration={2000} distance="40px">
      <section className="hero" id="greeting">
        <div className="hero__grid">
          <div className="hero__content">
            {greeting.heroEyebrow && (
              <span className="hero__eyebrow">{greeting.heroEyebrow}</span>
            )}
            <h1 className="hero__title">{greeting.title}</h1>
            {greeting.nickname && (
              <p className="hero__nickname">aka {greeting.nickname}</p>
            )}
            <p className="hero__subtitle">{greeting.subTitle}</p>

            {heroHighlights.length > 0 && (
              <ul className="hero__bullet-list">
                {heroHighlights.map((highlight, index) => (
                  <li key={`${highlight}-${index}`}>{highlight}</li>
                ))}
              </ul>
            )}

            {greeting.transformationNote && (
              <div className="hero__note">{greeting.transformationNote}</div>
            )}

            <div className="hero__actions">
              <Button
                text="Download Resume"
                newTab={true}
                href={greeting.resumeLink}
                theme={theme}
              />
              {greeting.mediumLink && (
                <Button
                  text="Read My Medium"
                  newTab={true}
                  href={greeting.mediumLink}
                  theme={theme}
                  variant="outline"
                />
              )}
            </div>

            <SocialMedia theme={theme} />
          </div>

          <div className="hero__visual">
            <div className="hero-card">
              <div className="hero-card__badge">No Hair, No Limits</div>
              <div className="hero-card__headline">Bold ideas. Bald head.</div>
              <p className="hero-card__copy">
                Navigating the sweet spot between experimentation and
                production so teams ship reliable data products faster.
              </p>
              <div className="hero-card__glow" />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
