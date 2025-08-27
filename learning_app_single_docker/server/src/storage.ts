/* storage.ts - minimal in-memory storage for demo purposes */
type User = { id: string; username: string; streak:number; level:number; };
type Subject = { id:string; name:string; description:string; icon:string; color:string; totalActivities:number; };

const demoUser: User = { id: "demo-user", username: "Demo Kid", streak: 3, level: 2 };
const demoSubjects: Subject[] = [
  { id: "s-math", name: "Math", description: "Counting & numbers", icon: "fas fa-calculator", color: "blue", totalActivities: 6 },
  { id: "s-finance", name: "Money", description: "Basics of finance", icon: "fas fa-coins", color: "green", totalActivities: 4 }
];

export const storage = {
  getUser: async (id: string) => {
    if (id === demoUser.id) return demoUser;
    return null;
  },
  getSubjects: async () => demoSubjects,
  getActivitiesBySubject: async (subjectId: string) => [{ id: "a1", title: "Demo Quiz", subjectId }],
  getUserProgress: async (userId: string) => [{ id: "p1", userId, subjectId: "s-math", progress: 40 }],
  getAchievements: async () => [{ id: "ach1", name: "First Steps", description: "Complete first activity", icon: "🏅", color: "yellow", requirement: 1, category: "general" }]
};
