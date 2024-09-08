import { useEffect, useState } from "react";

import axios from "axios";

export default function WallOfLove() {

    const params = new URLSearchParams(window.location.search);

    const [testimonials, setTestimonials] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/testimonials/wall-of-love`, {
                    params: {
                        apiKey: params.get("apiKey"),
                        boardId: params.get("boardId")
                    },
                });
                setTestimonials(response.data.testimonials);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch testimonials');
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, [params]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="vocalize-wall-of-love">
            {testimonials.length > 0 ? (
                testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <p>{testimonial.text}</p>
                        <span>— {testimonial.author}</span>
                    </div>
                ))
            ) : (
                <div>No testimonials found.</div>
            )}
        </div>
    );
}
