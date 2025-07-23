import type React from 'react';

export interface Project {
  name: string;
  role: string;
  stack: string[];
  timeline: string;
  description: string;
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  icon?: React.ReactNode;
}

export interface Achievement {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export interface Education {
    degree: string;
    institution: string;
    timeline: string;
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
    description?: string;
    credentialId?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
}