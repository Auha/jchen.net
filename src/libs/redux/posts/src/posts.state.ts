import {
  State,
  Action,
  StateContext,
  Selector
} from '@ngxs/store';

import {LoadPosts} from './posts.action';

import {PostModel} from '~/libs/models/post';

export interface PostsStateModel {
  current_page: number;
  posts: PostModel[];
  debug: string;
}

@State<PostsStateModel>({
  name: 'posts',
  defaults: {
    current_page: 0,
    posts: [],
    debug: 'Nothing'
  }
})
export class PostsState {

  @Action(LoadPosts)
  loadPosts(ctx: StateContext<PostsStateModel>) {
    ctx.patchState({
      debug: 'something'
    });

  }

}
