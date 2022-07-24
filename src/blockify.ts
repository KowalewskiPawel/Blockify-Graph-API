import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BlogFollowed as BlogFollowedEvent,
  BlogNFTMinted as BlogNFTMintedEvent,
  CommentAdded as CommentAddedEvent,
  PostAdded as PostAddedEvent,
  Transfer as TransferEvent
} from "../generated/Blockify/Blockify"
import {
  Approval,
  ApprovalForAll,
  BlogFollowed,
  BlogNFTMinted,
  CommentAdded,
  PostAdded,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleBlogFollowed(event: BlogFollowedEvent): void {
  let entity = new BlogFollowed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.blogId = event.params.blogId
  entity.follower = event.params.follower
  entity.save()
}

export function handleBlogNFTMinted(event: BlogNFTMintedEvent): void {
  let entity = new BlogNFTMinted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.blogId = event.params.blogId
  entity.blogData_blogOwner = event.params.blogData.blogOwner
  entity.blogData_blogId = event.params.blogData.blogId
  entity.blogData_blogDid = event.params.blogData.blogDid
  entity.blogData_blogname = event.params.blogData.blogname
  entity.blogData_coverPicture = event.params.blogData.coverPicture
  entity.blogData_followers = event.params.blogData.followers
  entity.save()
}

export function handleCommentAdded(event: CommentAddedEvent): void {
  let entity = new CommentAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.commentAdded_idOfPost = event.params.commentAdded.idOfPost
  entity.commentAdded_content = event.params.commentAdded.content
  entity.commentAdded_authorId = event.params.commentAdded.authorId
  entity.commentAdded_date = event.params.commentAdded.date
  entity.save()
}

export function handlePostAdded(event: PostAddedEvent): void {
  let entity = new PostAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.postAdded_id = event.params.postAdded.id
  entity.postAdded_title = event.params.postAdded.title
  entity.postAdded_content = event.params.postAdded.content
  entity.postAdded_picture = event.params.postAdded.picture
  entity.postAdded_video = event.params.postAdded.video
  entity.postAdded_username = event.params.postAdded.username
  entity.postAdded_authorId = event.params.postAdded.authorId
  entity.postAdded_date = event.params.postAdded.date
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}
