<template>
  <Card-list :list="experience"></Card-list>
</template>

<script>
import CardList from "./CardList";
export default {
  name: "WorkExperience",
  components: {
    CardList
  },
  data: () => ({
    experience: [
      {
        name: "Full Stack Developer",
        numbers: "3.5 Years",
        knowledge: "55",
        show: false,
        children: [
          {
            name: "Java",
            numbers: "1.5 Years",
            knowledge: "70",
            show: true,
            children: [
              { name: "Spring Boot", knowledge: "50", numbers: "1.5 Years" }
            ]
          },
          {
            name: "JavaScript",
            numbers: "2 Years",
            knowledge: "75",
            show: true,
            children: [
              { name: "Vue JS", knowledge: "80", numbers: "1 Years" },
              { name: "Angular JS", knowledge: "80", numbers: "1 Years" },
              { name: "Angular", knowledge: "55", numbers: "1 Years" },
              {
                name: "Node",
                knowledge: "66",
                numbers: "6 month",
                children: [
                  { name: "Express", knowledge: "50", numbers: "6 month" }
                ]
              }
            ]
          }
        ]
      }
    ]
  })
};
</script>
