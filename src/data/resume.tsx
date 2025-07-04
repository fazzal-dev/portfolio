import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Fazal Tanveer",
  initials: "FT",
  url: "http://chunkr.vercel.app",
  location: "Pakistan, PK",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer who enjoys building things and finding solutions that help people. I love working on projects that make a difference.",
  summary:
    "Computer Science graduate now working as a full-time freelancer with 5 years of experience. I specialize in MERN stack development but have also picked up various other technologies along the way. My freelance work spans from simple websites to complex web applications, giving me a well-rounded skillset and the ability to tackle diverse projects.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Git",
    "CI/CD",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "fazzal.dev@gmail.com",
    tel: "+92-320-5489211",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/fazzal-dev",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fazal-tanveer-89a52b261/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SyncOps",
      href: "https://www.syncops.tech",
      badges: [],
      location: "On-site",
      title: "Full Stack Developer",
      logoUrl: "/syncops.png",
      start: "July 2024",
      end: "Present",
      description:
        "Developing and maintaining full stack applications, working on both frontend and backend features. Collaborating with cross-functional teams to build scalable and efficient solutions using technologies like React,Next and Node.js.",
    },
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "Remote",
      title: "Freelance Developer",
      logoUrl: "/fiver.png",
      start: "March 2020",
      end: "Present",
      description:
        "Completed various freelance projects focusing on web development using the MERN stack (MongoDB, Express, React, Node.js). Delivered tailored solutions for clients across different industries, from building responsive websites to developing custom APIs.",
    },
  ],
  education: [
    {
      school: "University of Gujrat",
      href: "https://uog.edu.pk/",
      degree: "Bachelor's Degree of Computer Science (BSCS)",
      logoUrl: "/uog.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Tutoring Platform",
      href: "",
      dates: "January 2025 - Present",
      active: true,
      description:
        "A comprehensive tutoring platform connecting students with tutors and counselors. Each user type has their own customized dashboard. Tutors and counselors can manage their availability, schedule sessions, track student progress, and provide personalized guidance. Students can browse tutors/counselors by subject, book sessions, access learning resources, and receive academic support.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://ivyway.vercel.app/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://pub-d0660daf7a554ec7bf64ac3960a7076a.r2.dev/ivyway.mov",
    },
    {
      title: "InkLink - Automated Printshop System",
      href: "",
      dates: "December 2024 - February 2025",
      active: true,
      description:
        "An automated print shop management system that streamlines the order process from submission to delivery. Features include customizable product options, real-time order tracking, automated pricing, and an admin dashboard for managing print jobs, inventory, and customer communications. The system intelligently optimizes printing queues to maximize efficiency.",
      technologies: [
        "React Native",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/fazzal-dev/inklink-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://pub-d0660daf7a554ec7bf64ac3960a7076a.r2.dev/inkLink.mp4",
    },
    {
      title: "chunkr - A file sharing web app",
      href: "http://chunkr.vercel.app/",
      dates: "Jul 2024 - Aug 2024",
      active: true,
      description:
        "chunkr. is a fast, secure, and private P2P file sharing app. No accounts, no installations—just instant file transfers between devices directly from your browser.",
      technologies: ["Next.js", "JavaScript", "Node.js", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "http://chunkr.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/fazzal-dev/chunkr",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://pub-d0660daf7a554ec7bf64ac3960a7076a.r2.dev/chunkr.mp4",
    },
    {
      title: "Chat App",
      href: "https://chatspace-nextjs.vercel.app/",
      dates: "June 2024 - June 2024",
      active: true,
      description:
        "A real-time chat application using React, Next.js, Firebase, and Tailwind CSS.",
      technologies: ["Next.js", "Firebase", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://chatspace-nextjs.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/fazzal-dev/next-chat-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://pub-d0660daf7a554ec7bf64ac3960a7076a.r2.dev/chat-app.mp4",
    },
    // {
    //   title: "Business Website",
    //   href: "https://majid-ali.vercel.app/",
    //   dates: "April 2023 - September 2023",
    //   active: true,
    //   description:
    //     "A modern business website using Next.js, Tailwind CSS, and Shadcn UI. The site features a clean design, optimized performance, and an intuitive user interface. Leveraging the power of server-side rendering with Next.js.",
    //   technologies: ["Next.js", "JavaScript", "TailwindCSS", "Shadcn UI"],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://majid-ali.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-d0660daf7a554ec7bf64ac3960a7076a.r2.dev/business-website.mp4",
    // },
    {
      title: "Youtube to Mp3 Converter",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A web-based YouTube to MP3 converter using React, Next.js, Chakra UI, and Socket.io. This application allows users to input YouTube video URLs and quickly convert them to high-quality MP3 files with a user-friendly interface.",
      technologies: ["Next.js", "JavaScript", "Chakra UI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/fazzal-dev/yt-to-mp3-converter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://pub-d0660daf7a554ec7bf64ac3960a7076a.r2.dev/ytmp3.mp4",
    },
  ],
  hackathons: [
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
