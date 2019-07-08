import {
  State,
  Action,
  StateContext,
  Selector
} from '@ngxs/store';

import {PostModel} from '~/libs/models/post';

export interface PostsStateModel {
  current_page: number;
  posts: PostModel[];
}

