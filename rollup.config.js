import { nodeResolve } from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/main.js',
  output: {
    dir: 'www',
    format: 'esm'
  },
  plugins: [
    nodeResolve(),
    copy({
      targets: [
        {src: 'src/index.html', dest: 'www'}
      ]
    })
  ]
}
