import netflixThumbnail from "../assets/image/projects/netflix/netflix-landing.png";
import destinyThumbnail from "../assets/image/projects/destiny-chooser/dark-side.png";
import devcamperThumbnail from "../assets/image/projects/devcamper/devcamper-collection.png";
import deepSpaceRobotsThumbnail from "../assets/image/projects/deep-space/deep-space-landing.png";
import launchThumbnail from "../assets/image/projects/launch-tracker/launch-history.png";
import zipfinderThumbnail from "../assets/image/projects/zip-finder/zip-finder-bar.png";

export const mainWorks = [
  {
    brand: `Netflix Clone`,
    slug: `netflix-clone`,
    title: `Clone of the popular streaming service Netflix`,
    categories: [`react`],
    thumbnail: netflixThumbnail,
    link: "/netflix-clone",
  },
  {
    brand: `Destiny Chooser`,
    slug: `destiny-chooser`,
    title: `Single page app that allows user to toggle between light and dark side of the force`,
    categories: [`react`, `vanilla js`],
    thumbnail: destinyThumbnail,
    link: "/destiny-chooser",
  },
  {
    brand: `Deep Space Robots`,
    slug: `deep-space-robots`,
    title: `Creative agency I contracted for on multiple mvp platforms over the course of 3 months.`,
    categories: [`react`],
    thumbnail: deepSpaceRobotsThumbnail,
    link: "/deep-space-robots",
  },

  {
    brand: `Devcamper API`,
    slug: `devcamper-api`,
    title: `Backend API for the DevCamper application to manage bootcamps, courses, reviews, users, and authentication.`,
    categories: [`node`],
    thumbnail: devcamperThumbnail,
    link: "/devcamper-api",
  },
  {
    brand: `NASA Launch Tracker`,
    slug: `nasa-launch-tracker`,
    title: `Schedule a launch date for Nasa together with SpaceX`,
    categories: [`node`, `react`],
    thumbnail: launchThumbnail,
    link: "/launch-tracker",
  },
  {
    brand: `Zip Finder`,
    slug: `zip-finder`,
    title: `Quickly search basic information about any zip code in the USA`,
    categories: [`vanilla js`],
    thumbnail: zipfinderThumbnail,
    link: "/zip-finder",
  },
];
