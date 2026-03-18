import { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdClose, MdLaunch } from "react-icons/md";

const projects = [
  {
    title: "Plum Insurance",
    category: "Product Management | Live Project",
    tools: "Python, n8n workflow orchestration",
    image: "/images/Solidx.png",
    bullets: [
      "Built automated CD reconciliation for 200+ enterprise accounts using Python and n8n workflow orchestration.",
      "Protected ₹10 Cr annual revenue by designing a scalable reconciliation pipeline and collaborating cross-functionally.",
      "Improved discrepancy detection accuracy, projecting 60–70% manual effort reduction by designing rule-based logic."
    ],
    links: [
      { name: "Portfolio Website", url: "https://www.linkedin.com/in/arya-sheth1/" }
    ]
  },
  {
    title: "Finshell Pay",
    category: "Product Management | Live Project",
    tools: "Figma MVP, Notion AI, multi-LLM research",
    image: "/images/radix.png",
    bullets: [
      "Designed a video-learning Figma MVP, post-analysing 90+ interviews to identify behavioural patterns.",
      "Projected 50-60% DAU growth and 5% cvr uplift by mapping customer journey and redesigning onboarding flow.",
      "Projected 30–40% increase in session time using combined multi-LLM research and user insight synthesis."
    ],
    links: [
      { name: "View Insight", url: "#" }
    ]
  },
  {
    title: "Instagram Competitor Intelligence System",
    category: "AI Solutions Architect | Multi-Agent AI",
    tools: "Claude Code/Skills, Playwright, analytics pipelines",
    image: "/images/bond.png",
    bullets: [
      "Automated Instagram competitor intelligence across 10+ brands per run by designing a 4-agent AI pipeline.",
      "Collected 300+ Instagram data points per analysis by developing a Playwright agent.",
      "Generated 8+ automated marketing benchmarks by building analytics pipelines."
    ],
    links: [
      { name: "Project Demo", url: "#" },
      { name: "Tech Stack", url: "#" }
    ]
  },
  {
    title: "D2C RTO Reduction",
    category: "AI Solutions Architect | Product Artefact",
    tools: "Claude Skills, n8n, Vercel AI, WhatsApp API",
    image: "/images/sapphire.png",
    bullets: [
      "Designed an RTO reduction tool targeting 500+ D2C brands losing 30-40% COD orders.",
      "Uncovered delivery and impulse cancellation pain points through 20+ user interviews.",
      "Projected 12–18% RTO reduction by building an AI risk-scoring verification workflow."
    ],
    links: [
      { name: "Vercel AI Prototype", url: "#" }
    ]
  },
  {
    title: "AI Expense Tracker",
    category: "AI Solutions Architect | Full Stack Development",
    tools: "Claude code, Python, automated categorisation",
    image: "/images/Maxlife.png",
    bullets: [
      "Built an AI-powered expense dashboard auto-categorising bank transactions across 5+ categories.",
      "Reduced manual expense analysis 80% by designing rule-based transaction parsing."
    ],
    links: [
      { name: "Full Stack App", url: "#" }
    ]
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4 
                          onClick={() => setSelectedProject(project)}
                          style={{ cursor: 'pointer', transition: '0.3s' }}
                          className="project-title-link"
                          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accentColor)")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
                        >
                          {project.title}
                        </h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.links && project.links.length > 0 && (
                          <div className="card-links">
                            {project.links.map((link, lIndex) => (
                              <a 
                                key={lIndex} 
                                href={link.url} 
                                target="_blank" 
                                className="card-link"
                                data-cursor="disable"
                              >
                                {link.name} <MdLaunch />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div 
                      className="carousel-image-wrapper"
                      onClick={() => setSelectedProject(project)}
                      style={{ cursor: 'pointer' }}
                    >
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
        {/* Project Detail Modal */}
      {selectedProject && createPortal(
        <div className="project-modal-overlay active" onClick={() => setSelectedProject(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedProject(null)}>
              <MdClose />
            </button>
            <h3>{selectedProject.title}</h3>
            <p className="modal-category">{selectedProject.category}</p>
            <p><strong>Tools:</strong> {selectedProject.tools}</p>
            <ul>
              {selectedProject.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <div className="project-links">
              {selectedProject.links.map((link, i) => (
                <a key={i} href={link.url} target="_blank" className="project-link-btn">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
      </div>
    </div>
  );
};

export default Work;
