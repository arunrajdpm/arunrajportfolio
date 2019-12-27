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
        show: false,
        children: [
          {
            name: "1.6",
            show: true,
            children: [{ name: "1.6" }, { name: "2" }]
          },
          { name: "2", show: true, children: [{ name: "1.6" }] }
        ]
      }
    ]
  })
};
</script>
