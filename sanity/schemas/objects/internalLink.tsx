import React from 'react';
import pageTypes from '../common/pageTypes';

export const InternalLinkRender = ({ children }: any) => <span>{children} 🔗</span>;

export default {
  title: 'Internal link to another document',
  name: 'internalLink',
  type: 'reference',
  description: 'Locate a document you want to link to',
  to: pageTypes,
  blockEditor: {
    icon: () => '🔗',
    render: InternalLinkRender,
  },
};
