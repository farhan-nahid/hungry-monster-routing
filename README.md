### রিভিশন চেকলিস্ট

১. একটা CSS framework সিলেক্ট করো। যেটা দিয়ে আজকের প্রাকটিস করবে। সেটা হতে পারে react bootstrap বা হতে পারে material ui বা হতে পারে tailwind। যেটাই ভালো মনে হোক সেটা দিয়ে শুরু করলেই হবে। কারণ আজকের টা প্রাকটিস। আজকে ভালো করে করলে। সামনে কাজে লাগবে।

২. টুক করে search এর ফাংশনালিটি ইমপ্লিমেন্ট করে ফেলো। আজকের একমাত্র ভিডিওতে দেখানো হয়েছে। সেই অনুসারেই করে ফেলো। কি আছে জীবনে?

৩. চেষ্টা করো দেখো। নিজে নিজে ওয়েবসাইট কে একটু Responsive করতে পারো কিনা। না পারলে টেনশন এর কিছু নাই। সামনে আমরা দেখিয়ে দিবো। তবে তারপরেও তুমি আজকে হালকা হলেও ট্রাই করে দেখো।

৪. সিম্পল কয়েকটা রাউট বসিয়ে দাও। app.js এ গিয়ে। restaurant নামে একটা রাউট ইমপ্লিমেন্ট করে ফেলো।

৫. not found বা 404 পেইজ টা ইমপ্লিমেন্ট করে ফেলো।

৬. মেইন url বা "/" এই রাউট ইমপ্লিমেন্ট করে ফেলো। এবং exact ইউজ করতে ভুলো না কিন্তু।

৭. একটা header কম্পোনেন্ট বানাও। সেখানে কিছু Link দাও। জেগুলাতে ক্লিক করলে বিভিন্ন রাউট এ যাবে। দেখবে লিংক এ ক্লিক করলে যেন পেইজ রিলোড না হয়।

৮. restaurant পেইজে প্রত্যেকটা কার্ডে দুইটা ইভেন্ট হ্যান্ডলার যোগ করো। দুই রকমের। প্রথমটা জাস্ট Link দিয়ে। আরেকটা Link এর মধ্যে বাটন দিয়ে। এই দুইটা তে ক্লিক করলে সে ওই মেন্যু এর আইডি অনুসারে ডাইনামিক একটা url তৈরি করবে। এবং সেটাতে ক্লিক করলে সে সেই url এ চলে যাবে। যদিও এখনো সেই রাউট এ যাওয়ার কম্পোনেন্ট বানাও নাই। তাও এইটা করে ফেলো।

৯. এইবার আবার app.js এ গিয়ে রাউট প্যারামিটার ওয়ালা একটা রাউট ডিক্লেয়ার করে ফেলো। সেখানে mealdb নামে একটা রাউট প্যারামিটার দিয়ে রাউট ডিক্লেয়ার করো।

১০. রাউট প্যারামিট ইউজ করার জন্য একটা কম্পোনেন্ট ডিক্লেয়ার করো। তারপর সেই রাউট এ গিয়ে useParams দিয়ে সেই রাউট প্যারামিট বের করো। এরপর ডাইনামিকভাবে mealdb এর api কল করে সেই ডাটা ওয়েবসাইট এ দেখাও।

১১. সবার লাস্টে। সব কার্ডে একটা করে বাটন যোগ করো। যেটাতে ক্লিক করলে useHistory হুক ইউজ করে। history তে পুশ করে
