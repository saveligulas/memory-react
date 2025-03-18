type CardProps = {
    id: number;
    value: string;
    isFlipped: boolean;
    isMatched: boolean;
    onClick: () => void;
};

function Card({ id, value, isFlipped, isMatched, onClick }: CardProps) {
    return (
        <a
            href="#"
            onClick={isMatched ? onClick : null}
            style={{
                cursor: isMatched ? "default" : "pointer",
            }}
        >
            <div
                className={"memory__card"}
            >
                {
                }
                <img className={"memory__image"} src={value} alt={"error"}/>
            </div>

        </a>
    );
}

export default Card;