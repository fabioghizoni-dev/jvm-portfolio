const https = "https://";
const gitHubRaw = "github.com/fabioghizoni-dev";
const linkedinRaw = "linkedin.com/in/fábioghizoni";
const portfolioRaw = "portfolio-fabio-main.vercel.app";

export const personal = {
  email: "dev6solucoes@gmail.com",
  gitHub: { raw: gitHubRaw, url: `${https}${gitHubRaw}` },
  linkedin: { raw: linkedinRaw, url: `${https}${linkedinRaw}` },
  projects: {
    jvm: "",
    portfolio: { raw: portfolioRaw, url: `${https}${portfolioRaw}` },
  }
};