import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: '../schema.graphql',
    documents: './src/**/*.gql',
    generates: {
        './src/graphql/generated.ts': {
            plugins: ['typescript', 'typescript-operations', 'graphql-codegen-svelte-apollo'],
            config: {
                clientPath: '../apollo-client'
            }
        },
    },
}
export default config
