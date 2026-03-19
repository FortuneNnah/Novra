import { useState } from "react";

/* ─── Icons ─── */
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const PinterestIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.76 1.27-5.37 1.27-5.37s-.32-.65-.32-1.6c0-1.5.87-2.62 1.95-2.62.92 0 1.37.69 1.37 1.52 0 .93-.59 2.32-.9 3.6-.26 1.08.54 1.96 1.6 1.96 1.91 0 3.19-2.46 3.19-5.38 0-2.22-1.49-3.88-4.19-3.88-3.05 0-4.95 2.28-4.95 4.82 0 .87.25 1.48.64 1.96.18.21.2.29.14.54-.05.17-.15.59-.19.76-.06.25-.25.34-.46.25-1.3-.53-1.91-1.96-1.91-3.57 0-2.64 2.22-5.81 6.62-5.81 3.56 0 5.89 2.59 5.89 5.37 0 3.68-2.03 6.43-5.02 6.43-1 0-1.95-.54-2.27-1.15l-.62 2.38c-.22.86-.82 1.93-1.22 2.58.92.28 1.89.43 2.9.43 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
  </svg>
);

const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3.64 1.5h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.1a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.5z" />
  </svg>
);

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/* ─── Data ───*/
const NAV_COLS = [
  {
    heading: "Shop",
    links: ["Living Room", "Bedroom", "Dining", "Office", "Outdoor", "New Arrivals"],
  },
  {
    heading: "Company",
    links: ["About Us", "Our Story", "Sustainability", "Careers", "Press", "Blog"],
  },
  {
    heading: "Support",
    links: ["FAQ", "Shipping & Returns", "Order Tracking", "Care Guide", "Warranty", "Contact Us"],
  },
];

const SOCIALS = [
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Pinterest", Icon: PinterestIcon },
  { label: "X / Twitter", Icon: XIcon },
  { label: "Facebook", Icon: FacebookIcon },
];

const CONTACT = [
  { Icon: PhoneIcon, text: "+234 800 000 0000" },
  { Icon: MailIcon, text: "hello@lumiere.com" },
  { Icon: PinIcon, text: "12 Design Ave, Abuja, Nigeria" },
];

const LEGAL = ["Privacy Policy", "Terms of Service", "Cookie Settings"];
const PAYMENTS = ["Visa", "Mastercard", "PayPal", "Apple Pay"];

const S = {
  footer: {
    backgroundColor: "#1a1a1a",
    color: "#ccc",
    fontFamily: "Poppins, sans-serif",
    position: "relative",
  },
  wave: {
    width: "100%",
    lineHeight: 0,
    overflow: "hidden",
    display: "block",
  },
  waveSvg: {
    display: "block",
    width: "100%",
    height: "clamp(30px, 5vw, 60px)",
  },
  inner: {
    display: "flex",
    flexWrap: "wrap",
    gap: "clamp(30px, 4vw, 50px)",
    padding: "clamp(32px, 5vw, 60px) clamp(16px, 5vw, 60px) clamp(24px, 3vw, 40px)",
    alignItems: "flex-start",
  },
  brand: {
    flex: "1 1 240px",
    maxWidth: "280px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  logo: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 300,
    fontSize: "clamp(1.4rem, 3vw, 2rem)",
    color: "#fff",
    letterSpacing: "2px",
    margin: 0,
  },
  tagline: {
    fontSize: "0.87rem",
    fontWeight: 300,
    color: "#999",
    lineHeight: 1.7,
    margin: 0,
  },
  socials: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    marginTop: "4px",
    flexWrap: "wrap",
  },
  navColumns: {
    flex: "1 1 560px",
    display: "flex",
    flexWrap: "wrap",
    gap: "clamp(20px, 3vw, 40px)",
  },
  col: {
    flex: "1 1 110px",
    minWidth: "110px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  colWide: {
    flex: "1 1 230px",
    maxWidth: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  colHeading: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 600,
    fontSize: "0.78rem",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    margin: 0,
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "9px",
  },
  newsletterText: {
    fontSize: "0.84rem",
    color: "#888",
    lineHeight: 1.6,
    margin: 0,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    width: "100%",
    background: "#2a2a2a",
    border: "1px solid #333",
    borderRadius: "4px",
    padding: "10px 14px",
    fontFamily: "Poppins, sans-serif",
    fontSize: "0.84rem",
    color: "#fff",
    outline: "none",
    boxSizing: "border-box",
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "4px",
  },
  contactRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "0.82rem",
    color: "#888",
    lineHeight: 1.4,
    margin: 0,
  },
  contactIcon: {
    color: "#6B4F3A",
    flexShrink: 0,
    display: "flex",
  },
  bottom: {
    borderTop: "1px solid #2a2a2a",
    padding: "18px clamp(16px, 5vw, 60px)",
  },
  bottomInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "14px",
  },
  copy: {
    fontSize: "0.78rem",
    fontWeight: 300,
    color: "#555",
    margin: 0,
  },
  legalLinks: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexWrap: "wrap",
  },
  divider: {
    color: "#333",
    fontSize: "0.78rem",
  },
  payments: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    flexWrap: "wrap",
  },
  payBadge: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "0.65rem",
    fontWeight: 700,
    color: "#666",
    border: "1px solid #2e2e2e",
    borderRadius: "4px",
    padding: "3px 7px",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  },
};

/* ─── Sub-components ─── */
function SocialLink({ Icon, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "38px",
        height: "38px",
        borderRadius: "50%",
        border: hovered ? "1px solid #6B4F3A" : "1px solid #333",
        color: hovered ? "#fff" : "#777",
        backgroundColor: hovered ? "#6B4F3A" : "transparent",
        textDecoration: "none",
        transition: "all 0.28s",
        flexShrink: 0,
      }}
    >
      <Icon />
    </a>
  );
}

function FooterLink({ children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <li>
      <a
        href="#"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontFamily: "Poppins, sans-serif",
          fontSize: "0.87rem",
          fontWeight: 300,
          color: hovered ? "#fff" : "#888",
          textDecoration: "none",
          paddingLeft: hovered ? "5px" : "0",
          display: "inline-block",
          transition: "color 0.25s, padding-left 0.25s",
        }}
      >
        {children}
      </a>
    </li>
  );
}

function LegalLink({ children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: "0.78rem",
        color: hovered ? "#ccc" : "#555",
        textDecoration: "none",
        fontFamily: "Poppins, sans-serif",
        transition: "color 0.25s",
      }}
    >
      {children}
    </a>
  );
}

function SubscribeButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="submit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#fff" : "#6B4F3A",
        color: hovered ? "#1a1a1a" : "#F5F3EF",
        border: "none",
        borderRadius: "4px",
        fontFamily: "Poppins, sans-serif",
        fontSize: "0.8rem",
        fontWeight: 600,
        padding: "10px 22px",
        cursor: "pointer",
        letterSpacing: "0.5px",
        transition: "background 0.28s, color 0.28s",
        alignSelf: "flex-start",
        width: "100%",
      }}
    >
      Subscribe
    </button>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer style={S.footer}>

      {/* Wave divider */}
      <div style={S.wave}>
        <svg style={S.waveSvg} viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#f1f1f1" />
        </svg>
      </div>

      {/* Main content */}
      <div style={S.inner}>

        {/* Brand */}
        <div style={S.brand}>
          <h2 style={S.logo}>Nevora</h2>
          <p style={S.tagline}>
            Thoughtfully designed furniture for spaces that inspire. Crafted with care, delivered with love.
          </p>
          <div style={S.socials}>
            {SOCIALS.map(({ label, Icon }) => (
              <SocialLink key={label} label={label} Icon={Icon} />
            ))}
          </div>
        </div>

        {/* Nav columns */}
        <div style={S.navColumns}>

          {NAV_COLS.map(({ heading, links }) => (
            <div key={heading} style={S.col}>
              <h4 style={S.colHeading}>{heading}</h4>
              <ul style={S.linkList}>
                {links.map((link) => (
                  <FooterLink key={link}>{link}</FooterLink>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter + Contact */}
          <div style={S.colWide}>
            <h4 style={S.colHeading}>Stay Inspired</h4>
            <p style={S.newsletterText}>
              Get design tips, new arrivals, and exclusive offers delivered to your inbox.
            </p>

            {submitted ? (
              <p
                style={{
                  fontSize: "0.84rem",
                  color: "#6B4F3A",
                  fontWeight: 500,
                  padding: "10px 0",
                  margin: 0,
                }}
              >
                ✓ You're on the list — thanks!
              </p>
            ) : (
              <form style={S.form} onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => setInputFocused(false)}
                  placeholder="Your email address"
                  aria-label="Email address"
                  required
                  style={{
                    ...S.input,
                    borderColor: inputFocused ? "#6B4F3A" : "#333",
                    transition: "border-color 0.25s",
                  }}
                />
                <SubscribeButton />
              </form>
            )}

            <div style={S.contactInfo}>
              {CONTACT.map(({ Icon, text }) => (
                <p key={text} style={S.contactRow}>
                  <span style={S.contactIcon}>
                    <Icon />
                  </span>
                  {text}
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={S.bottom}>
        <div style={S.bottomInner}>
          <p style={S.copy}>&copy; {new Date().getFullYear()} Lumière. All rights reserved.</p>

          <div style={S.legalLinks}>
            {LEGAL.map((item, i) => (
              <span key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {i > 0 && <span style={S.divider}>·</span>}
                <LegalLink>{item}</LegalLink>
              </span>
            ))}
          </div>

          <div style={S.payments}>
            {PAYMENTS.map((p) => (
              <span key={p} style={S.payBadge}>{p}</span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}