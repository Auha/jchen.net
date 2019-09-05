export class LoadPosts {
  static readonly type = '[POSTS] Load Posts';
}

export class Success {
  static readonly type = '[POSTS] Success';
}

export class GetPost {
  static readonly type = '[POSTS] Get Post';

  constructor(public uid: string) {}
}

