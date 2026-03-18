import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Customer Success Associate</h4>
                <h5>Rapidops Inc.</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              ● Improved NPS by 10% and strengthened retention by resolving 3,000+
              queries through workflows and conducting pre- and post-sales calls.
              <br />
              ● Simplified client operations and drove sales impact by building
              automations and addressing client queries to streamline routine
              processes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>VNurture Technologies</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              ● Enhanced reporting accuracy by 5% and enabled faster
              decision-making by cleaning 10k+ rows from large datasets.
              <br />
              ● Improved trend visibility by designing 4 dynamic KPI dashboards.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>CreArt Solutions</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              ● Delivered 6+ responsive web pages using HTML, CSS, and JS with
              clean, modern designs.
              <br />
              ● Reduced onboarding time by 15% by integrating 5 APIs and creating
              feature demo videos.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>TatvaSoft</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              ● Delivered a full-stack Book Store website using .NET, PostgreSQL,
              and ReactJS.
              <br />
              ● Deployed 3 production-ready features and integrated 20+ book
              listings.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PGP in Applied Marketing</h4>
                <h5>Altera Institute</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building intelligent automations and AI-assisted solutions.
              Automating Instagram competitor intelligence and designing RTO
              reduction tools using Claude Code, n8n, and Python.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
