import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemas } from '@/sanity/schemas';
import { defaultDocumentNode } from '@/sanity/desk/defaultDocumentNode';
import { apiVersion, dataset, projectId } from '@/sanity/env';

const config = defineConfig({
  projectId: projectId,
  dataset: dataset,
  title: 'Sanity Umain Starter',
  apiVersion: apiVersion,
  basePath: '/admin',
  plugins: [deskTool({ defaultDocumentNode })],
  schema: { types: schemas as any },
});

export default config;
