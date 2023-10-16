import React from 'react';

const LinkRender = ({ children }: any) => <span>{children} 🌍</span>;

export default {
  title: 'URL',
  name: 'link',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url',
    },
    {
      title: 'Is phone number',
      name: 'phone',
      description: 'Enable if the link is a phone number',
      type: 'boolean',
    },
    {
      title: 'Is email adress',
      name: 'email',
      description: 'Enable if the link is an email adress',
      type: 'boolean',
    },
  ],
  blockEditor: {
    icon: () => '🌍',
    render: LinkRender,
  },
};
