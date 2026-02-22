const https = "https://";
const gitHubRaw = "github.com/fabioghizoni-dev";
const linkedinRaw = "linkedin.com/in/fábioghizoni";
const jvmPortfolioRaw = "jvm-portfolio.vercel.app";
const jvmRaw = "www.instagram.com/jvm_webmarketing";
const portfolioRaw = "portfolio-fabio-main.vercel.app";

export const personal = {
  email: "dev6solucoes@gmail.com",
  gitHub: { raw: gitHubRaw, url: `${https}${gitHubRaw}` },
  linkedin: { raw: linkedinRaw, url: `${https}${linkedinRaw}` },
  projects: {
    jvm: { raw: jvmRaw, url: `${https}${jvmRaw}` },
    portfolio: { raw: portfolioRaw, url: `${https}${portfolioRaw}` },
    jvmPortfolio: { raw: jvmPortfolioRaw, url: `${https}${jvmPortfolioRaw}` }
  }
};