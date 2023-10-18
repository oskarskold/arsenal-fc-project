import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemas } from '@/sanity/schemas';
import { defaultDocumentNode } from '@/sanity/desk/defaultDocumentNode';
import { apiVersion, dataset, projectId } from '@/sanity/env';
import { visionTool } from '@sanity/vision';

const config = defineConfig({
  projectId: projectId,
  dataset: dataset,
  title: 'Sanity Umain Starter',
  apiVersion: apiVersion,
  basePath: '/admin',
  plugins: [deskTool({ defaultDocumentNode }), visionTool()],
  schema: { types: schemas as any },
});

export default config;
