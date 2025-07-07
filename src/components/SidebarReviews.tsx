import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    user: "@kenkyu_student",
    comment: "AI研究セミナーで新しい知見が得られました！次回も参加したいです。",
  },
  {
    id: 2,
    user: "@jobhunter2025",
    comment: "GD体験会で自分の課題が見つかった。就活仲間もできて良かった！",
  },
];

export function SidebarReviews() {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4 text-gray-700">参加者の口コミ</h2>
      <div className="space-y-3">
        {reviews.map((review) => (
          <Card key={review.id} className="bg-white">
            <CardContent className="py-3 px-4">
              <div className="font-semibold text-sm text-teal-700 mb-1">{review.user}</div>
              <div className="text-sm text-gray-700">{review.comment}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 