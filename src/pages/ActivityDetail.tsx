
import { useEffect, useState } from "react";
import client from "../Client";

type Activity = {
  _id: string;
  title?: string;
  hint?: string;
  description?: string;
  slug?: { current: string };
  coverImage?: { asset?: { url: string } };
  contentImages?: { asset?: { url: string } }[];
}

const ActivityDetail = () => {
  const [activity, setActivity] = useState<Activity | null>(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "activity" && isFeatured == true][0]{
        _id,
        title,
        hint,
        description,
        slug,
        coverImage{asset->},
        contentImages[]{asset->}
      }`)
      .then((data) => setActivity(data))
      .catch((err) => console.error(err));
  }, []);

  if (!activity) return (
    <div className="flex items-center justify-center h-96 text-gray-400">Loading activity...</div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-8 items-center px-8 py-12">
      {/* Left: Cover Image */}
      <div className="flex-1 flex justify-center">
        {activity.coverImage?.asset?.url ? (
          <img src={activity.coverImage.asset.url} alt="Activity Cover" className="w-40 h-40 md:w-64 md:h-64 object-contain rounded-xl shadow" />
        ) : (
          <div className="w-40 h-40 md:w-64 md:h-64 bg-gray-100 flex items-center justify-center rounded-xl">No Image</div>
        )}
      </div>
      {/* Right: Text Content */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left">
        {activity.title && (
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{activity.title}</h2>
        )}
        {activity.hint && (
          <div className="text-lg text-Joybrown mb-2 font-medium">{activity.hint}</div>
        )}
        {activity.description && (
          <p className="text-gray-700 mb-6 whitespace-pre-line">{activity.description}</p>
        )}
        {activity.contentImages && activity.contentImages.length > 0 && (
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
            {activity.contentImages.map((img, idx) => (
              img.asset?.url ? (
                <img key={idx} src={img.asset.url} alt={`Activity content ${idx+1}`} className="w-24 h-24 object-cover rounded-lg border" />
              ) : null
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ActivityDetail;