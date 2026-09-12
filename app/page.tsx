import Image from "next/image";
import { WaitlistForm } from "./WaitlistForm";

const outfit = "var(--font-outfit),sans-serif";
const dmSans = "var(--font-dm-sans),sans-serif";
const mono = "var(--font-jetbrains-mono),monospace";

const gridBg: React.CSSProperties = {
  backgroundImage: "linear-gradient(#e7f0f1 1px,transparent 1px),linear-gradient(90deg,#e7f0f1 1px,transparent 1px)",
  backgroundSize: "64px 64px",
};

const sectionBorder: React.CSSProperties = { borderBottom: "1px solid #e3ecee" };

const eyebrowStyle: React.CSSProperties = {
  font: `500 11.5px/1 ${mono}`,
  letterSpacing: ".16em",
  color: "#00705f",
};

const h2Style: React.CSSProperties = {
  margin: "18px auto 0",
  maxWidth: "22ch",
  font: `600 clamp(28px,4vw,44px)/1.1 ${outfit}`,
  letterSpacing: "-.03em",
};

const bodyStyle: React.CSSProperties = {
  margin: "16px auto 0",
  maxWidth: "60ch",
  font: `400 16px/1.65 ${dmSans}`,
  color: "#4c5a55",
};

const cardBase: React.CSSProperties = {
  padding: "26px 24px",
  border: "1px solid #e2ebec",
  borderRadius: 13,
  background: "#fff",
};

const numberTile: React.CSSProperties = {
  width: 34,
  height: 34,
  borderRadius: 9,
  background: "#e4f3f0",
  color: "#00705f",
  display: "grid",
  placeItems: "center",
  font: `500 12px/1 ${mono}`,
  marginBottom: 18,
};

const problems = [
  { n: "01", title: "Too Much Theory", body: "Tutorials often stop before real experimentation." },
  { n: "02", title: "Setup Friction", body: "Installing and configuring cloud environments can take hours." },
  { n: "03", title: "Fear of Breaking Things", body: "Learners need an environment where they can experiment freely." },
];

const howItWorks = [
  { n: "01", title: "Learn the concept", body: "Read the lesson, see the commands in context." },
  { n: "02", title: "Start a hands-on lab", body: "A fresh environment opens in the browser." },
  { n: "03", title: "Experiment in isolation", body: "Install tools, change configurations, break things." },
  { n: "04", title: "Complete the challenge", body: "Solve a practical task, not a quiz answer." },
  { n: "05", title: "Validate the solution", body: "Checks confirm the outcome, not the keystrokes." },
  { n: "06", title: "Continue learning", body: "Progress carries into the next lesson." },
];

const capabilities = [
  { tag: "LESSONS", title: "Interactive Lessons", body: "Rich lessons combining explanations, code, diagrams, images and videos." },
  { tag: "LABS", title: "Hands-on Labs", body: "Practice concepts inside isolated lab environments." },
  { tag: "TERMINAL", title: "Browser Terminal", body: "Run real commands directly from the browser." },
  { tag: "CHALLENGES", title: "Challenges", body: "Solve practical tasks instead of simply watching demonstrations." },
  { tag: "RESET", title: "Instant Reset", body: "Experiment freely and return to a clean environment." },
  { tag: "PROGRESS", title: "Progress Tracking", body: "Track lessons, challenges and completed learning paths." },
];

const courseAreas = [
  "Linux", "Git", "Python", "Docker", "Kubernetes", "AWS", "Azure", "Terraform", "Networking", "Security", "DevOps",
];

const labLifecycle = ["Start Lab", "Fresh Environment", "Experiment", "Complete Task", "Stop Lab", "Clean Environment"];

const techCards = [
  { title: "Containerized environments", body: "Each lab runs as its own container image with the tools the lesson needs." },
  { title: "Ephemeral by design", body: "Environments are created per session and torn down when the lab stops." },
  { title: "Browser-based terminal", body: "Shell access streamed to the browser — nothing to install locally." },
  { title: "Cloud infrastructure", body: "Lab capacity is the main infrastructure need as the platform grows." },
];

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} style={{ color: "#4c5a55" }}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div style={{ background: "#f7fbfc" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 60,
          background: "rgba(247,249,248,.88)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e3ecee",
        }}
      >
        <nav
          style={{
            maxWidth: 1220,
            margin: "0 auto",
            padding: "13px clamp(16px,4vw,40px)",
            display: "flex",
            alignItems: "center",
            gap: "clamp(14px,3vw,34px)",
          }}
        >
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10, color: "#0f1513" }}>
            <Image src="/shabytes-icon-64.png" alt="" width={30} height={30} style={{ borderRadius: 7 }} />
            <span style={{ font: `600 18px/1 ${outfit}`, letterSpacing: "-.02em" }}>ShaBytes</span>
          </a>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(12px,2vw,26px)",
              margin: "0 auto",
              font: `500 14.5px/1 ${dmSans}`,
              color: "#4c5a55",
            }}
          >
            <NavLink href="#product">Platform</NavLink>
            <NavLink href="#courses">Courses</NavLink>
            <NavLink href="#labs">Labs</NavLink>
            <NavLink href="#about">About</NavLink>
          </div>
          <a
            href="#early-access"
            className="hover-dark"
            style={{
              flex: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 17px",
              borderRadius: 9,
              background: "#008a76",
              color: "#fff",
              font: `600 14px/1 ${dmSans}`,
            }}
          >
            Join the Waitlist <span style={{ font: `500 13px/1 ${mono}` }}>→</span>
          </a>
        </nav>
      </header>

      <section id="top" style={{ ...gridBg, ...sectionBorder }}>
        <div
          style={{
            maxWidth: 1220,
            margin: "0 auto",
            padding: "clamp(48px,8vw,104px) clamp(16px,4vw,40px) clamp(28px,4vw,52px)",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: "26px auto 0",
              maxWidth: "20ch",
              font: `600 clamp(40px,7.4vw,82px)/1.02 ${outfit}`,
              letterSpacing: "-.035em",
            }}
          >
            Learn Cloud by <span style={{ color: "#008a76" }}>Building It.</span>
          </h1>
          <p style={{ margin: "22px auto 0", maxWidth: "58ch", font: `400 clamp(15.5px,1.6vw,19px)/1.6 ${dmSans}`, color: "#4c5a55" }}>
            Learn cloud, DevOps and security through interactive lessons and hands-on labs designed for developers who
            learn best by doing.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 34 }}>
            <a
              href="#early-access"
              className="hover-dark"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "14px 24px",
                borderRadius: 10,
                background: "#008a76",
                color: "#fff",
                font: `600 15.5px/1 ${dmSans}`,
              }}
            >
              Join the Waitlist <span style={{ font: `500 14px/1 ${mono}` }}>→</span>
            </a>
            <a
              href="#product"
              className="hover-border"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "14px 24px",
                borderRadius: 10,
                border: "1px solid #d3e0e0",
                background: "#fff",
                color: "#0f1513",
                font: `600 15.5px/1 ${dmSans}`,
              }}
            >
              ▷ Explore the Platform
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginTop: 44,
              font: `500 11.5px/1 ${mono}`,
              letterSpacing: ".14em",
              color: "#5a6560",
            }}
          >
            <span>LEARN</span>
            <span style={{ color: "#00705f" }}>›</span>
            <span>BUILD</span>
            <span style={{ color: "#00705f" }}>›</span>
            <span>EXPERIMENT</span>
            <span style={{ color: "#00705f" }}>›</span>
            <span>VALIDATE</span>
          </div>
        </div>

        <div id="product" style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(16px,4vw,40px) clamp(44px,6vw,76px)" }}>
          <div
            style={{
              border: "1px solid #dde8e8",
              borderRadius: 14,
              background: "#fff",
              overflow: "hidden",
              boxShadow: "0 24px 60px -30px rgba(15,45,35,.28)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", borderBottom: "1px solid #eaf0f0" }}>
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#e3e7e5" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#e3e7e5" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#e3e7e5" }} />
              </div>
              <div
                style={{
                  flex: 1,
                  minWidth: 0,
                  maxWidth: 380,
                  margin: "0 auto",
                  padding: "5px 12px",
                  borderRadius: 7,
                  background: "#f4f6f5",
                  font: `400 11.5px/1.2 ${mono}`,
                  color: "#5a6560",
                  textAlign: "center",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                app.shabytes.com/labs/aws-iam
              </div>
              <span style={{ flex: "none", font: `500 10.5px/1 ${mono}`, color: "#616d68", letterSpacing: ".08em" }}>
                PRODUCT PREVIEW · DEMO
              </span>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch" }}>
              <aside style={{ flex: "1 1 215px", minWidth: 200, borderRight: "1px solid #eaf0f0", padding: "18px 16px", background: "#f9fcfc" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 20 }}>
                  <Image src="/shabytes-icon-64.png" alt="" width={24} height={24} style={{ borderRadius: 6 }} />
                  <span style={{ font: `600 14px/1 ${outfit}` }}>ShaBytes</span>
                </div>
                <div style={{ font: `500 10px/1 ${mono}`, letterSpacing: ".14em", color: "#5f6b66", marginBottom: 12 }}>
                  AWS FUNDAMENTALS
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 3, font: `400 13px/1.35 ${dmSans}` }}>
                  <div style={{ display: "flex", gap: 9, alignItems: "center", padding: "8px 10px", borderRadius: 8, color: "#4c5a55" }}>
                    <span style={{ font: `400 11px/1 ${mono}`, color: "#00705f" }}>✓</span>Cloud concepts
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: 9,
                      alignItems: "center",
                      padding: "8px 10px",
                      borderRadius: 8,
                      background: "#e4f3f0",
                      color: "#00594c",
                      fontWeight: 500,
                    }}
                  >
                    <span style={{ width: 7, height: 7, borderRadius: "50%", border: "2px solid #00705f" }} />
                    Understanding IAM
                  </div>
                  <div style={{ display: "flex", gap: 9, alignItems: "center", padding: "8px 10px", borderRadius: 8, color: "#6b7671" }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", border: "1.5px solid #ccd5d1" }} />
                    Policies &amp; permissions
                  </div>
                  <div style={{ display: "flex", gap: 9, alignItems: "center", padding: "8px 10px", borderRadius: 8, color: "#6b7671" }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", border: "1.5px solid #ccd5d1" }} />
                    IAM challenge
                  </div>
                </div>
                <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #eaf0f0" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      font: `500 10px/1 ${mono}`,
                      color: "#5f6b66",
                      marginBottom: 8,
                    }}
                  >
                    <span>PROGRESS</span>
                    <span>25%</span>
                  </div>
                  <div style={{ height: 4, borderRadius: 3, background: "#eaf0f0" }}>
                    <div style={{ width: "25%", height: 4, borderRadius: 3, background: "#008a76" }} />
                  </div>
                </div>
              </aside>

              <div style={{ flex: "2 1 340px", minWidth: 280, padding: "20px 22px", borderRight: "1px solid #eaf0f0" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    font: `500 10.5px/1 ${mono}`,
                    letterSpacing: ".12em",
                    color: "#00705f",
                  }}
                >
                  LESSON 02 <span style={{ color: "#6e7a75" }}>▤</span>
                </div>
                <div style={{ marginTop: 16, font: `400 12.5px/1 ${mono}`, color: "#5f6b66" }}>AWS Fundamentals</div>
                <h3 style={{ margin: "8px 0 0", font: `600 24px/1.2 ${outfit}`, letterSpacing: "-.02em" }}>Understanding IAM</h3>
                <p style={{ margin: "12px 0 0", font: `400 13.5px/1.65 ${dmSans}`, color: "#4c5a55" }}>
                  Identity and Access Management controls who can access AWS resources and what actions they can perform.
                </p>
                <div style={{ marginTop: 18, padding: "14px 16px", borderLeft: "3px solid #00705f", background: "#eff8f6", borderRadius: "0 8px 8px 0" }}>
                  <div style={{ font: `500 10px/1 ${mono}`, letterSpacing: ".14em", color: "#00705f", marginBottom: 8 }}>
                    LEARNING OBJECTIVE
                  </div>
                  <div style={{ font: `400 13px/1.55 ${dmSans}`, color: "#33403b" }}>
                    Create an IAM policy that allows read-only access to S3, then confirm that write access is denied.
                  </div>
                </div>
                <div style={{ marginTop: 18 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      font: `500 10px/1 ${mono}`,
                      letterSpacing: ".12em",
                      color: "#5f6b66",
                      marginBottom: 12,
                    }}
                  >
                    <span>TASK PROGRESS</span>
                    <span>2 / 4</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, font: `400 12.5px/1.4 ${mono}` }}>
                    <div style={{ display: "flex", gap: 10, color: "#5a6560" }}>
                      <span style={{ color: "#00705f" }}>[✓]</span>Create policy document
                    </div>
                    <div style={{ display: "flex", gap: 10, color: "#5a6560" }}>
                      <span style={{ color: "#00705f" }}>[✓]</span>Attach policy to user
                    </div>
                    <div style={{ display: "flex", gap: 10, color: "#0f1513" }}>
                      <span style={{ color: "#8a6320" }}>[ ]</span>Verify read access to bucket
                    </div>
                    <div style={{ display: "flex", gap: 10, color: "#5f6b66" }}>
                      <span>[ ]</span>Confirm write is denied
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ flex: "2 1 330px", minWidth: 290, padding: 16, background: "#f9fcfc", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 9, font: `500 12.5px/1 ${dmSans}`, color: "#3c4a45" }}>
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#008a76",
                        animation: "softpulse 2s ease-in-out infinite",
                      }}
                    />
                    Lab Status: <span style={{ color: "#00705f", fontWeight: 700 }}>Running</span>
                  </div>
                  <div style={{ font: `500 12.5px/1 ${mono}`, color: "#3c4a45" }}>⏱ 01:27:41</div>
                </div>
                <div style={{ flex: 1, borderRadius: 11, overflow: "hidden", background: "#0d1512", minHeight: 230 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", background: "#111b17", borderBottom: "1px solid #1d2a25" }}>
                    <div style={{ display: "flex", gap: 5 }}>
                      <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#e0685c" }} />
                      <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#dcb05a" }} />
                      <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#5fb98a" }} />
                    </div>
                    <span style={{ margin: "0 auto", font: `400 11px/1 ${mono}`, color: "#8d9b95" }}>shabytes-lab — bash</span>
                    <span style={{ font: `400 11px/1 ${mono}`, color: "#8d9b95" }}>&gt;_</span>
                  </div>
                  <div style={{ padding: "13px 14px", font: `400 11.5px/1.8 ${mono}`, color: "#cfd8d4" }}>
                    <div>
                      <span style={{ color: "#5fb98a" }}>learner@shabytes:~$</span> aws sts get-caller-identity
                    </div>
                    <div style={{ color: "#9aa8a2" }}>{"{"}</div>
                    <div style={{ color: "#9aa8a2" }}>&nbsp;&nbsp;&quot;UserId&quot;: &quot;DEMOUSER:shabytes-lab&quot;,</div>
                    <div style={{ color: "#9aa8a2" }}>&nbsp;&nbsp;&quot;Account&quot;: &quot;000000000000&quot;,</div>
                    <div style={{ color: "#9aa8a2" }}>&nbsp;&nbsp;&quot;Arn&quot;: &quot;arn:aws:sts::000000000000:assumed-role/DemoLearnerRole&quot;</div>
                    <div style={{ color: "#9aa8a2" }}>{"}"}</div>
                    <div style={{ marginTop: 5 }}>
                      <span style={{ color: "#5fb98a" }}>learner@shabytes:~$</span> aws s3 cp ./notes.txt s3://shabytes-lab-demo/
                    </div>
                    <div style={{ color: "#e0a87c" }}>upload failed: An error occurred (AccessDenied)</div>
                    <div style={{ marginTop: 5 }}>
                      <span style={{ color: "#5fb98a" }}>learner@shabytes:~$</span>{" "}
                      <span
                        style={{
                          display: "inline-block",
                          width: 7,
                          height: 13,
                          background: "#5fb98a",
                          verticalAlign: -2,
                          animation: "blink 1.1s step-end infinite",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span
                    style={{
                      flex: "1 1 120px",
                      textAlign: "center",
                      padding: 10,
                      borderRadius: 9,
                      border: "1px solid #dde8e8",
                      background: "#fff",
                      font: `500 12px/1 ${dmSans}`,
                      color: "#3c4a45",
                    }}
                  >
                    Reset environment
                  </span>
                  <span
                    style={{
                      flex: "1 1 90px",
                      textAlign: "center",
                      padding: 10,
                      borderRadius: 9,
                      border: "1px solid #ecd9d6",
                      background: "#fff",
                      font: `500 12px/1 ${dmSans}`,
                      color: "#a5493c",
                    }}
                  >
                    Stop lab
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p style={{ margin: "14px 0 0", textAlign: "center", font: `400 11.5px/1.5 ${mono}`, color: "#5f6b66" }}>
            Product Preview · Demo Environment — examples shown are illustrative.
          </p>
        </div>
      </section>

      <section style={sectionBorder}>
        <div style={{ maxWidth: 1220, margin: "0 auto", padding: "clamp(48px,7vw,92px) clamp(16px,4vw,40px)", textAlign: "center" }}>
          <div style={eyebrowStyle}>THE PROBLEM</div>
          <h2 style={h2Style}>Watching isn&apos;t the same as doing.</h2>
          <p style={bodyStyle}>
            Cloud technologies are difficult to learn from theory alone. Developers need a safe place to experiment,
            make mistakes, run commands and understand what actually happens.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 16, marginTop: 44, textAlign: "left" }}>
            {problems.map((p) => (
              <div key={p.n} style={cardBase}>
                <div style={numberTile}>{p.n}</div>
                <h3 style={{ margin: "0 0 9px", font: `600 17px/1.3 ${outfit}` }}>{p.title}</h3>
                <p style={{ margin: 0, font: `400 14px/1.6 ${dmSans}`, color: "#4c5a55" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="labs" style={{ ...sectionBorder, background: "#fff" }}>
        <div style={{ maxWidth: 1220, margin: "0 auto", padding: "clamp(48px,7vw,92px) clamp(16px,4vw,40px)", textAlign: "center" }}>
          <div style={eyebrowStyle}>HOW IT WORKS</div>
          <h2 style={{ ...h2Style, maxWidth: "22ch" }}>Learn it. Build it. Break it. Try again.</h2>
          <p style={{ ...bodyStyle, maxWidth: "54ch" }}>Six steps, repeated per lesson. Every concept ends in a command you ran yourself.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 14, marginTop: 44, textAlign: "left" }}>
            {howItWorks.map((s) => (
              <div key={s.n} style={{ padding: "22px 20px", border: "1px solid #e2ebec", borderRadius: 13, background: "#f9fcfc" }}>
                <div style={{ font: `500 11.5px/1 ${mono}`, color: "#00705f", marginBottom: 14 }}>{s.n}</div>
                <div style={{ font: `600 15.5px/1.3 ${outfit}`, marginBottom: 7 }}>{s.title}</div>
                <div style={{ font: `400 13.5px/1.6 ${dmSans}`, color: "#4c5a55" }}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionBorder}>
        <div style={{ maxWidth: 1220, margin: "0 auto", padding: "clamp(48px,7vw,92px) clamp(16px,4vw,40px)", textAlign: "center" }}>
          <div style={eyebrowStyle}>CORE CAPABILITIES</div>
          <h2 style={{ ...h2Style, maxWidth: "22ch" }}>What the platform is made of.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 16, marginTop: 44, textAlign: "left" }}>
            {capabilities.map((c) => (
              <div key={c.tag} style={cardBase}>
                <div style={{ font: `500 10.5px/1 ${mono}`, letterSpacing: ".12em", color: "#00705f", marginBottom: 16 }}>{c.tag}</div>
                <h3 style={{ margin: "0 0 9px", font: `600 17px/1.3 ${outfit}` }}>{c.title}</h3>
                <p style={{ margin: 0, font: `400 14px/1.6 ${dmSans}`, color: "#4c5a55" }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" style={{ ...sectionBorder, background: "#fff" }}>
        <div style={{ maxWidth: 1220, margin: "0 auto", padding: "clamp(48px,7vw,92px) clamp(16px,4vw,40px)", textAlign: "center" }}>
          <div style={eyebrowStyle}>COURSE AREAS</div>
          <h2 style={{ ...h2Style, maxWidth: "22ch" }}>Build skills across the modern cloud stack.</h2>
          <p style={{ ...bodyStyle, maxWidth: "56ch" }}>
            Course areas planned for the first version. Lesson and lab coverage varies by area while the content is
            being written.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginTop: 36 }}>
            {courseAreas.map((area) => (
              <span
                key={area}
                style={{
                  padding: "10px 16px",
                  borderRadius: 999,
                  border: "1px solid #dee9e9",
                  background: "#f9fcfc",
                  font: `500 13.5px/1 ${mono}`,
                  color: "#33403b",
                }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="technical" style={{ ...sectionBorder, ...gridBg }}>
        <div style={{ maxWidth: 1220, margin: "0 auto", padding: "clamp(48px,7vw,92px) clamp(16px,4vw,40px)" }}>
          <div style={{ textAlign: "center" }}>
            <div style={eyebrowStyle}>TECHNICAL APPROACH</div>
            <h2 style={{ ...h2Style, maxWidth: "22ch" }}>Your browser becomes the lab.</h2>
            <p style={{ ...bodyStyle, maxWidth: "58ch" }}>
              Every lab is designed for experimentation. Install tools, change configurations, make mistakes and learn
              from them.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 44, alignItems: "stretch" }}>
            <div style={{ flex: "1 1 320px", minWidth: 290, padding: "26px 24px", border: "1px solid #e2ebec", borderRadius: 13, background: "#fff" }}>
              <div style={{ font: `500 10.5px/1 ${mono}`, letterSpacing: ".12em", color: "#5f6b66", marginBottom: 20 }}>
                CONCEPTUAL ARCHITECTURE
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, font: `500 13px/1.3 ${mono}` }}>
                <div style={{ padding: "13px 15px", border: "1px solid #e2ebec", borderRadius: 9, background: "#f9fcfc", color: "#33403b" }}>
                  Student Browser
                </div>
                <div style={{ padding: "0 0 0 15px", color: "#6e7a75" }}>↓</div>
                <div style={{ padding: "13px 15px", border: "1px solid #e2ebec", borderRadius: 9, background: "#f9fcfc", color: "#33403b" }}>
                  ShaBytes Platform
                </div>
                <div style={{ padding: "0 0 0 15px", color: "#6e7a75" }}>↓</div>
                <div style={{ padding: "13px 15px", border: "1px solid #e2ebec", borderRadius: 9, background: "#f9fcfc", color: "#33403b" }}>
                  Lab Orchestrator
                </div>
                <div style={{ padding: "0 0 0 15px", color: "#6e7a75" }}>↓</div>
                <div style={{ padding: "13px 15px", border: "1px solid #bfe3dc", borderRadius: 9, background: "#e4f3f0", color: "#00594c" }}>
                  Isolated Lab Environment
                </div>
                <div style={{ padding: "0 0 0 15px", color: "#6e7a75" }}>↓</div>
                <div style={{ padding: "13px 15px", border: "1px solid #e2ebec", borderRadius: 9, background: "#f9fcfc", color: "#4c5a55" }}>
                  Linux / Docker / Kubernetes / Cloud Tools
                </div>
              </div>
              <p style={{ margin: "20px 0 0", font: `400 13.5px/1.6 ${dmSans}`, color: "#4c5a55" }}>
                Labs are designed to be ephemeral and isolated so learners can experiment without affecting other
                learners.
              </p>
            </div>
            <div style={{ flex: "1 1 320px", minWidth: 290, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ padding: "26px 24px", border: "1px solid #e2ebec", borderRadius: 13, background: "#fff" }}>
                <div style={{ font: `500 10.5px/1 ${mono}`, letterSpacing: ".12em", color: "#5f6b66", marginBottom: 18 }}>
                  LAB LIFECYCLE
                </div>
                <div style={{ display: "flex", flexDirection: "column", font: `500 13px/1.3 ${mono}`, color: "#33403b" }}>
                  {labLifecycle.map((step, i) => (
                    <div
                      key={step}
                      style={{
                        display: "flex",
                        gap: 13,
                        padding: "11px 0",
                        borderBottom: i !== labLifecycle.length - 1 ? "1px solid #eaf0f0" : "none",
                      }}
                    >
                      <span style={{ color: "#00705f", width: 22, flex: "none" }}>{String(i + 1).padStart(2, "0")}</span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 16 }}>
                {techCards.map((c) => (
                  <div key={c.title} style={{ padding: 20, border: "1px solid #e2ebec", borderRadius: 13, background: "#fff" }}>
                    <div style={{ font: `600 14px/1.3 ${outfit}`, marginBottom: 7 }}>{c.title}</div>
                    <div style={{ font: `400 13px/1.55 ${dmSans}`, color: "#4c5a55" }}>{c.body}</div>
                  </div>
                ))}
              </div>
              <p style={{ margin: 0, font: `400 11.5px/1.6 ${mono}`, color: "#5f6b66" }}>
                Architecture is under active development. Implementation details will be documented as they are
                finalized.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" style={{ ...sectionBorder, background: "#fff" }}>
        <div style={{ maxWidth: 1220, margin: "0 auto", padding: "clamp(48px,7vw,92px) clamp(16px,4vw,40px)" }}>
          <div style={{ textAlign: "center" }}>
            <div style={eyebrowStyle}>WHY SHABYTES</div>
            <h2 style={{ ...h2Style, maxWidth: "22ch" }}>From passive learning to active building.</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 44 }}>
            <div style={{ flex: "1 1 240px", minWidth: 220, padding: 24, border: "1px solid #e2ebec", borderRadius: 13, background: "#f9fcfc" }}>
              <div style={{ font: `500 10.5px/1 ${mono}`, letterSpacing: ".12em", color: "#5f6b66", marginBottom: 18 }}>
                TRADITIONAL LEARNING
              </div>
              <div style={{ display: "flex", flexDirection: "column", font: `400 13.5px/1.4 ${mono}`, color: "#5a6560" }}>
                <div style={{ padding: "11px 0", borderBottom: "1px solid #eaf0f0" }}>Watch video</div>
                <div style={{ padding: "11px 0", borderBottom: "1px solid #eaf0f0" }}>Copy commands</div>
                <div style={{ padding: "11px 0" }}>Hope it works</div>
              </div>
            </div>
            <div style={{ flex: "1 1 240px", minWidth: 220, padding: 24, border: "1px solid #bfe3dc", borderRadius: 13, background: "#eff8f6" }}>
              <div style={{ font: `500 10.5px/1 ${mono}`, letterSpacing: ".12em", color: "#00705f", marginBottom: 18 }}>SHABYTES</div>
              <div style={{ display: "flex", flexDirection: "column", font: `400 13.5px/1.4 ${mono}`, color: "#243430" }}>
                {["Learn concept", "Start lab", "Run commands", "Experiment", "Solve challenge"].map((step) => (
                  <div key={step} style={{ padding: "11px 0", borderBottom: "1px solid #d6eae6" }}>
                    {step}
                  </div>
                ))}
                <div style={{ padding: "11px 0" }}>Validate</div>
              </div>
            </div>
            <div style={{ flex: "1 1 260px", minWidth: 240, padding: 24, border: "1px solid #e2ebec", borderRadius: 13, background: "#f9fcfc" }}>
              <div style={{ font: `500 10.5px/1 ${mono}`, letterSpacing: ".12em", color: "#5f6b66", marginBottom: 18 }}>
                BUILT AROUND THREE PRINCIPLES
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  { n: "01", t: "Learn by doing" },
                  { n: "02", t: "Experiment without fear" },
                  { n: "03", t: "Start clean every time" },
                ].map((p) => (
                  <div key={p.n}>
                    <div style={{ font: `500 11px/1 ${mono}`, color: "#00705f", marginBottom: 7 }}>{p.n}</div>
                    <div style={{ font: `600 16px/1.25 ${outfit}` }}>{p.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "clamp(32px,5vw,56px)",
              padding: "clamp(26px,4vw,44px)",
              border: "1px solid #e2ebec",
              borderRadius: 14,
              background: "#f9fcfc",
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(24px,4vw,56px)",
            }}
          >
            <div style={{ flex: "2 1 400px", minWidth: 290 }}>
              <div style={{ font: `500 10.5px/1 ${mono}`, letterSpacing: ".12em", color: "#5f6b66", marginBottom: 16 }}>
                WHY I&apos;M BUILDING THIS
              </div>
              <h3 style={{ margin: "0 0 16px", font: `600 clamp(21px,2.6vw,28px)/1.25 ${outfit}`, letterSpacing: "-.02em" }}>
                Cloud skills should be learned by doing.
              </h3>
              <p style={{ margin: "0 0 14px", maxWidth: "58ch", font: `400 15px/1.68 ${dmSans}`, color: "#4c5a55" }}>
                Cloud technologies are best learned by experimenting, but setting up environments for every learner can
                be difficult and expensive.
              </p>
              <p style={{ margin: 0, maxWidth: "58ch", font: `400 15px/1.68 ${dmSans}`, color: "#4c5a55" }}>
                ShaBytes is being built around a simple idea: learn the concept, open a lab, experiment, break
                something, fix it, and understand why it works.
              </p>
              <p style={{ margin: "18px 0 0", maxWidth: "58ch", font: `400 15px/1.68 ${dmSans}`, color: "#4c5a55" }}>
                Cloud and DevOps skills are easiest to understand when you can actually use them. ShaBytes is being
                built to give learners a safe environment where they can experiment with real tools, make mistakes,
                and learn from the outcome — without spending hours setting up infrastructure first.
              </p>
            </div>
            <div style={{ flex: "1 1 240px", minWidth: 220, borderLeft: "1px solid #e2ebec", paddingLeft: "clamp(20px,3vw,34px)" }}>
              <div style={{ font: `500 10.5px/1 ${mono}`, letterSpacing: ".12em", color: "#5f6b66", marginBottom: 16 }}>OUR GOAL</div>
              <p style={{ margin: 0, font: `400 14.5px/1.68 ${dmSans}`, color: "#4c5a55" }}>
                Our goal is to make practical cloud and DevOps education more accessible by combining structured
                learning with real hands-on experimentation.
              </p>
              <div style={{ marginTop: 24, display: "flex", flexDirection: "column", font: `400 13px/1.4 ${mono}`, color: "#5a6560" }}>
                {["Learn the concept.", "Start the lab.", "Try it yourself.", "Break something.", "Fix it."].map((line) => (
                  <div key={line} style={{ padding: "9px 0", borderTop: "1px solid #eaf0f0" }}>
                    {line}
                  </div>
                ))}
                <div style={{ padding: "9px 0", borderTop: "1px solid #eaf0f0", color: "#0f1513" }}>Understand why it works.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="early-access" style={{ ...gridBg, ...sectionBorder }}>
        <div
          style={{
            maxWidth: 1220,
            margin: "0 auto",
            padding: "clamp(48px,7vw,92px) clamp(16px,4vw,40px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(28px,5vw,64px)",
            alignItems: "flex-start",
          }}
        >
          <div style={{ flex: "2 1 380px", minWidth: 290 }}>
            <div style={eyebrowStyle}>EARLY ACCESS</div>
            <h2 style={{ margin: "18px 0 0", maxWidth: "20ch", font: `600 clamp(28px,4vw,44px)/1.1 ${outfit}`, letterSpacing: "-.03em" }}>
              Help shape the future of hands-on cloud learning.
            </h2>
            <p style={{ margin: "18px 0 0", maxWidth: "52ch", font: `400 16px/1.65 ${dmSans}`, color: "#4c5a55" }}>
              Join the early-access list to follow the launch and get access when the platform opens.
            </p>
            <div style={{ marginTop: 30, paddingTop: 24, borderTop: "1px solid #dee9e9" }}>
              <h3 style={{ margin: "0 0 10px", font: `600 clamp(20px,2.4vw,26px)/1.25 ${outfit}`, letterSpacing: "-.02em" }}>
                Stop watching. Start building.
              </h3>
              <p style={{ margin: 0, maxWidth: "48ch", font: `400 15px/1.65 ${dmSans}`, color: "#4c5a55" }}>
                Join ShaBytes early and be among the first to experience a new way to learn cloud and DevOps.
              </p>
            </div>
          </div>
          <WaitlistForm />
        </div>
      </section>

      <footer style={{ background: "#0d1512", color: "#dde5e1" }}>
        <div
          style={{
            maxWidth: 1220,
            margin: "0 auto",
            padding: "clamp(40px,6vw,68px) clamp(16px,4vw,40px) 30px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))",
            gap: "clamp(26px,4vw,52px)",
          }}
        >
          <div style={{ maxWidth: 260 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <Image src="/shabytes-icon-64.png" alt="" width={28} height={28} style={{ borderRadius: 7 }} />
              <span style={{ font: `600 17px/1 ${outfit}`, color: "#fff" }}>ShaBytes</span>
            </div>
            <div style={{ font: `400 13.5px/1.55 ${dmSans}`, color: "#a8b4af" }}>Learn Cloud by Building It.</div>
          </div>
          <div>
            <div style={{ font: `500 10.5px/1 ${mono}`, letterSpacing: ".12em", color: "#8d9b95", marginBottom: 16 }}>PRODUCT</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11, font: `400 13.5px/1.3 ${dmSans}` }}>
              <a href="#product" style={{ color: "#c4cfca" }}>Platform</a>
              <a href="#courses" style={{ color: "#c4cfca" }}>Courses</a>
              <a href="#labs" style={{ color: "#c4cfca" }}>Labs</a>
              <a href="#about" style={{ color: "#c4cfca" }}>About</a>
            </div>
          </div>
          <div>
            <div style={{ font: `500 10.5px/1 ${mono}`, letterSpacing: ".12em", color: "#8d9b95", marginBottom: 16 }}>LEGAL</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11, font: `400 13.5px/1.3 ${dmSans}` }}>
              <a href="#top" style={{ color: "#c4cfca" }}>Privacy Policy</a>
              <a href="#top" style={{ color: "#c4cfca" }}>Terms of Service</a>
            </div>
          </div>
          <div>
            <div style={{ font: `500 10.5px/1 ${mono}`, letterSpacing: ".12em", color: "#8d9b95", marginBottom: 16 }}>CONTACT</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11, font: `400 13.5px/1.3 ${dmSans}` }}>
              <a href="mailto:support@shabytes.com" style={{ color: "#c4cfca" }}>support@shabytes.com</a>
            </div>
          </div>
        </div>
        <div
          style={{
            maxWidth: 1220,
            margin: "0 auto",
            padding: "20px clamp(16px,4vw,40px) 32px",
            borderTop: "1px solid #1d2a25",
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            justifyContent: "space-between",
            font: `400 11.5px/1.5 ${mono}`,
            color: "#8d9b95",
          }}
        >
          <span>© 2026 ShaBytes · shabytes.com</span>
          <span>Product screenshots on this page are illustrative</span>
        </div>
      </footer>
    </div>
  );
}
