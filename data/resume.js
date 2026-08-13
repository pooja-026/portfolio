export const profile = {
  name: "Pooja Nemade",
  tagline:
    "Data Engineer & ML Engineer turning messy pipelines into decisions that hold up under pressure.",
  about:
    "I build systems that work quietly and well. On the data engineering side, that's meant pipelines on Azure Databricks and Delta Lake that don't wake anyone up at 3am. On the ML side, it's meant everything from BERT to LSTMs, applied to problems where a wrong answer actually costs someone something - like Mockmate, my AI interview coach, which turned into a published research paper. I led a 7-person team to ship Victor AI, a multi-agent university assistant, in a single hackathon weekend. Currently finishing my MS in Computer and Information Science at the University at Buffalo - looking for where to point all of this next.",
  education:
    "MS in Computer and Information Science, University at Buffalo (SUNY), expected Dec 2026, GPA 3.7.",
  experience:
    "Data engineering internship at Celebal Technologies - Azure Databricks, Delta Lake, Azure Data Factory.",
  mlSkills: "BERT, LSTM, GRU, TensorFlow, PyTorch.",
};

export const projects = [
  {
    name: "LookThePart",
    tag: "Featured",
    desc: "An event-tracking and user analytics pipeline that turns product activity into clear signals.",
  },
  {
    name: "Mockmate",
    tag: "Published research",
    desc: "An AI-powered interview evaluator, developed into published research.",
  },
  {
    name: "Victor AI",
    tag: "Hackathon - led team of 7",
    desc: "A multi-agent university assistant built on IBM Watson Orchestrate.",
  },
];

// System prompt for the chatbot - kept in one place so it always matches the page content.
export const RESUME_CONTEXT = `
You are an AI assistant embedded on Pooja's portfolio website. Answer visitor questions
about her background concisely, in third person, in a warm but professional tone.

BACKGROUND:
- ${profile.education}
- ${profile.experience}
- ML/AI: ${profile.mlSkills}
- Full-stack development.

PROJECTS:
${projects.map((p, i) => `${i + 1}. ${p.name} - ${p.desc} (${p.tag})`).join("\n")}

Keep answers to 2-4 sentences unless asked for detail. If asked something outside this scope
(personal contact info, salary expectations, etc.), politely redirect to the contact form.
`;
