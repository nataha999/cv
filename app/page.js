import React from 'react';
import styles from './page.module.css'; // Импорт стилей

const Resume = () => {
  const personalInfo = {
    name: "Спиридонова Наталья",
    jobTitle: "Веб-дизайнер",
    location: {
      city: "Йошкар-Ола",
      region: "республика Марий Эл",
      countryCode: "Россия"
    },
    contact: [
      { icon: "fa-envelope", text: "snatawan1@gmail.com" },
      { icon: "fa-phone-square", text: "79024310910" }
    ],
    profiles: [
      { icon: "fa-linkedin", text: "tg @kartoh4", link: "https://t.me/kartoh4" },
      { icon: "fa-github", text: "nataha999", link: "https://github.com/nataha999" }
    ],
    skills: [
      { title: "UX/UI Дизайн", level: "intermediate", items: ["Figma", "Wireframing", "Prototyping"] },
      { title: "Веб-разработка", level: "beginner", items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
      { title: "Графический Дизайн", level: "beginner", items: ["Adobe Photoshop", "Illustrator", "After Effects", "Typography", "Color Theory"] }
    ],
    education: [
      { institution: "Политехнический лицей-интернат", course: "Полное общее образование", duration: "2019 - 2021", location: "г. Йошкар-Ола" },
      { institution: "ПГТУ", course: "Программная инженерия, 4 курс", duration: "2021 - 2025", location: "г. Йошкар-Ола", major: "Неоконченное высшее" }
    ],
    projects: [
      { title: "Проект на практике", description: "Переработка сайта отеля", duration: "Jul 2023", contribution: "https://www.figma.com/proto/NrUj8exP3sM6bp1EbMJbHo/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%BD%D0%B0-%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D0%B5?node-id=0-1&t=VDsdD9D64phMaT6L-1" },
      { title: "Обучающий проект в университете", description: "Сайт питомника для растений", duration: "Sep 2024 - Dec 2024", contribution: "https://www.figma.com/design/odmTGXUv1T5mEj7SOISgtV/ui-volgatech?node-id=212-2&t=qPEUvjcaFgybzeTk-4" }
    ],
    languages: [
      { name: "Russian", proficiency: "native speaker" },
      { name: "English", proficiency: "intermediate" }
    ]
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Мое резюме</h1>

      {/* Новый раздел: Информация о пользователе */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Обо мне</h2>
        <p className={styles.text}>
          <strong>Имя:</strong> {personalInfo.name}
        </p>
        <p className={styles.text}>
          <strong>Должность:</strong> {personalInfo.jobTitle}
        </p>
        <p className={styles.text}>
          <strong>Местоположение:</strong> {personalInfo.location.city}, {personalInfo.location.region}, {personalInfo.location.countryCode}
        </p>
      </section>

      {/* Остальные разделы */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Контакты</h2>
        {personalInfo.contact.map((contact, index) => (
          <p key={index} className={styles.text}>{contact.text}</p>
        ))}
        {personalInfo.profiles.map((profile, index) => (
          <p key={index} className={styles.text}>
            {profile.text}: <a href={profile.link} className={styles.link}>{profile.link}</a>
          </p>
        ))}
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Образование</h2>
        {personalInfo.education.map((edu, index) => (
          <div key={index}>
            <p className={styles.text}>{edu.institution} - {edu.course} ({edu.duration})</p>
            <p className={styles.text}>{edu.location}</p>
          </div>
        ))}
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Навыки</h2>
        {personalInfo.skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <h3 className={styles.skillTitle}>{skill.title} ({skill.level})</h3>
            <ul className={styles.list}>
              {skill.items.map((item, idx) => (
                <li key={idx} className={styles.listItem}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Проекты</h2>
        {personalInfo.projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.text}>{project.description}</p>
            <p className={styles.text}>Период: {project.duration}</p>
            <a href={project.contribution} className={styles.link}>Ссылка на проект</a>
          </div>
        ))}
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Языки</h2>
        {personalInfo.languages.map((language, index) => (
          <p key={index} className={styles.language}>
            {language.name} - {language.proficiency}
          </p>
        ))}
      </section>
    </div>
  );
};

export default Resume;