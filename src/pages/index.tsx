/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  CreateLoaderOptions,
  parseAsArrayOf,
  parseAsString,
  ParserMap,
} from 'nuqs';

const QUERY_PARAMS: ParserMap = {
  clothing_size: parseAsArrayOf(parseAsString),
  shoe_size: parseAsArrayOf(parseAsString),
};

const QUERY_OPTIONS: CreateLoaderOptions<typeof QUERY_PARAMS> = {
  urlKeys: {
    clothing_size: 'clothing_size[]',
    shoe_size: 'shoe_size[]',
  },
};

export default function Home() {
  return <div>check code</div>
}
