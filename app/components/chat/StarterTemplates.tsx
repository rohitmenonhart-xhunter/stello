import React from 'react';
import type { Template } from '~/types/template';
import { STARTER_TEMPLATES } from '~/utils/constants';

interface FrameworkLinkProps {
  template: Template;
}

const FrameworkLink: React.FC<FrameworkLinkProps> = ({ template }) => (
  <a
    href={`/git?url=https://github.com/${template.githubRepo}.git`}
    data-state="closed"
    data-discover="true"
    className="flex flex-col items-center gap-2 p-4 rounded-lg transition-all hover:bg-purple-500/10"
  >
    <div
      className={`${template.icon} w-12 h-12 text-4xl transition-all opacity-75 hover:opacity-100 hover:text-purple-500 dark:text-white dark:opacity-50 dark:hover:opacity-100 dark:hover:text-purple-400`}
      title={template.label}
    />
    <span className="text-sm text-bolt-elements-textSecondary">{template.label}</span>
  </a>
);

const StarterTemplates: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
      <h1 className="text-4xl lg:text-6xl font-bold text-bolt-elements-textPrimary mb-6 animate-fade-in">
        Start a blank app with your favorite stack
      </h1>
      <p className="text-lg lg:text-xl mb-12 text-bolt-elements-textSecondary text-center animate-fade-in animation-delay-200">
        Choose from our curated collection of modern frameworks and tools to kickstart your project
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in animation-delay-300">
        {STARTER_TEMPLATES.map((template) => (
          <FrameworkLink key={template.name} template={template} />
        ))}
      </div>
    </div>
  );
};

export default StarterTemplates;
