import '../styles/questions.scss';
import { ReactNode } from 'react';
import cx from 'classnames'

type QuestionsProps = {
  content: string;
  author: {
    name: string,
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighLighted?: boolean;
}

export function Question({
  content,
  author,
  isAnswered = false,
  isHighLighted = false,
  children,
}: QuestionsProps) {
  return (
    <div className={cx(
      `question`,
      { answered: isAnswered},
      { highlighted: isHighLighted && !isAnswered},
    )}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div className="gap">
          {children}
        </div>
      </footer>

    </div>
  )
}