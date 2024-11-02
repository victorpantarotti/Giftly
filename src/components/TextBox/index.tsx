import BoxContainer from "../BoxContainer";
import MarkdownContainer from "../MarkdownContainer";

export interface TextBoxProps {
    content: string
}

const TextBox = ({ content }: TextBoxProps) => {
    return (
        <BoxContainer>
            <div style={{ padding: "20px" }}>
                <MarkdownContainer text={content} />
            </div>
        </BoxContainer>
    );
};

export default TextBox;