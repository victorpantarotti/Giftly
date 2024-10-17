import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import "./MarkdownContainer.css";

interface MarkdownContainerProps {
    text: string
}

const MarkdownContainer = ({ text }: MarkdownContainerProps) => {
    return (
        <div className="post-markdown-container">
            <ReactMarkdown children={text} rehypePlugins={[rehypeRaw, remarkGfm]} />
        </div>
    );
};

export default MarkdownContainer;