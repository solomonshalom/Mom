import { Content } from './Section'

export const about: Content[] = [
  {
    title: 'Background',
    content:
      "Born and raised in Dubai, UAE. I've been into coding from a young age, and I'm passionate about many creative pursuits, including photography, design, and coding. This combination of interests is what led me to develop skills through guiltlessly exploring my passions and interests. I center my work on teaching/writing to empower, educate and elevate people.",
  },
  {
    title: 'Skills',
    content:
      "I primarily work with React and Next.js ecosystem, and I've worked extensively with several tools such as TypeScript, Jest/Enzyme, Redux, Storybook, Chakra, Tailwind/SCSS, PostgreSQL, CircleCI, and much more. The web is an endless medium of opportunities, and I have yet to scratch the surface.",
  },
  {
    title: 'Now',
    content:
      'Praying, Writing and Learning.',
  },
]

export const work: Content[] = [
  {
    title: 'Coming Soon',
    content:
      'An exciting journey, waiting to be unveiled',
    href: '#',
    newTab: true,
  },
]

export const writing: Content[] = [
  {
    title: 'Creating an Accessible Command Menu in React',
    content: 'All about building custom accessible command menus.',
    href: '/writing/cmdk',
  },
  {
    title: "Why ORMs Aren't Always a Great Idea",
    content:
      "Why ORMs aren't always a great way to represent and model relational data.",
    href: '/writing/orms',
  },
  {
    title: 'Referential Integrity With Sharded Databases',
    content: 'Exploring sharding and referential integrity.',
    href: '/writing/sharded-dbs',
  },
  {
    title: 'Designing for the Elderly',
    content: 'A guide to design accessible interfaces for older adults.',
    href: '/writing/elderly',
  },
  {
    title: 'Business Cards in the Terminal',
    content: 'Hacker-esque introductions with NPM.',
    href: '/writing/cards',
  },
]
