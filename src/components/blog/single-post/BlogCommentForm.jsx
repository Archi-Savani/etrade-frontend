'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BlogComment } from '@/data/Comments';

const BlogCommentForm = ({metaData}) => {
    const [blogCommentForm, setBlogCommentForm] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const CommentDataHandler = (data) => {
        data.postId = metaData.id;
        setBlogCommentForm(data);
    }

    const getComment = BlogComment.filter((data) => data.postId === metaData.id);

  return (
    <>
      <div className="axil-comment-area">
        <h4 className="title">{getComment.length} comments</h4>
        <ul className="comment-list">
          {getComment?.map((comment) => (
            <li className="comment" key={comment.id}>
              <div className="comment-body">
                <div className="single-comment">
                  <div className="comment-img">
                    <Image
                      src={comment.author_img}
                      width={60}
                      height={60}
                      alt={comment.author_name}
                    />
                  </div>
                  <div className="comment-inner">
                    <h6 className="commenter">{comment.author_name}</h6>
                    <div className="comment-meta">
                      <div className="time-spent">
                        {comment.date} at {comment.time}
                      </div>
                      <div className="reply-edit">
                        <div className="reply">
                          <button className="comment-reply-link">Reply</button>
                        </div>
                      </div>
                    </div>
                    <div className="comment-text">
                      <p>{comment.comment}</p>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="children">
                {comment.reply?.map((reply) => (
                  <li className="comment" key={reply.replyId}>
                    <div className="comment-body">
                      <div className="single-comment">
                        <div className="comment-img">
                          <Image
                            src={reply.author_img}
                            width={60}
                            height={60}
                            alt={reply.author_name}
                          />
                        </div>
                        <div className="comment-inner">
                          <h6 className="commenter">{reply.author_name}</h6>
                          <div className="comment-meta">
                            <div className="time-spent">
                              {reply.date} at {reply.time}
                            </div>
                            <div className="reply-edit">
                              <div className="reply">
                                <button className="comment-reply-link">
                                  Reply
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="comment-text">
                            <p>{reply.comment}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="comment-respond">
        <h4 className="title">Leave a Reply</h4>
        <form onSubmit={handleSubmit(CommentDataHandler)}>
          <p className="comment-notes">
            <span id="email-notes">
              Your email address will not be published.
            </span>
          </p>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label>Leave a Reply</label>
                <textarea
                  {...register("message", { required: true })}
                  placeholder="Your Comment"
                />
                {errors.message && (
                  <p className="error">Message is required.</p>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="form-group">
                <label>
                  Name <span>*</span>
                </label>
                <input {...register("name", { required: true })} type="text" />
                {errors.name && <p className="error">Name is required.</p>}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="form-group">
                <label>
                  Email <span>*</span>{" "}
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                />
                {errors.email && <p className="error">Email is required.</p>}
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-submit">
                <button
                  name="submit"
                  type="submit"
                  id="submit"
                  className="axil-btn btn-bg-primary w-auto"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BlogCommentForm;
