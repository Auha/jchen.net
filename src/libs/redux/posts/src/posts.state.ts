import {
  State,
  Action,
  StateContext,
  Selector
} from '@ngxs/store';

export interface PostsStateModel {
  current_page: number;
}

