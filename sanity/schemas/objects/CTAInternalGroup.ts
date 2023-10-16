import { MdSubdirectoryArrowRight } from 'react-icons/md';

export default {
  title: 'Group',
  name: 'CTAInternalGroup',
  type: 'object',
  icon: MdSubdirectoryArrowRight,
  fields: [
    {
      name: 'title',
      type: 'localeString',
    },
    {
      name: 'items',
      type: 'array',
      of: [{ type: 'CTAInternal' }],
    },
  ],
  preview: {
    select: {
      title: 'title.sv',
    },
  },
};
