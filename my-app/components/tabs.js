import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="course" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="course">Add New Course</TabsTrigger>
    <TabsTrigger value="assignment">Add new Assignment</TabsTrigger>
  </TabsList>
  <Tabs.Content className="TabsContent" value="course">

      <fieldset className="Fieldset">
        <label className="Label" htmlFor=" Course name">
          Course Name
        </label>
        <input className="Input" id="name" />
      </fieldset>
      <fieldset className="Fieldset">
        <label className="Label" htmlFor="instructors">
          Instructors
        </label>
        <input className="Input" id="instructors" />
        <label className="Label" htmlFor="category">
            Category
        </label>
        <input className="Input" id="enrollmentstatus"/>
        <label className="Label" htmlFor="enrollmentstatus">
            Enrollment Status
        </label>
        <input className="Input" id="duration"/>
        <label className="Label" htmlFor="duration">
            Duration
        </label>
        <input className="Input" id="duration"/>
        <label className="Label" htmlFor="syllabus">
            Syllabus
        </label>
        <input className="Input" id="syllabus"/>
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">Save changes</button>
      </div>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="assignment">

<fieldset className="Fieldset">
  <label className="Label" htmlFor="questions">
    No of questions
  </label>
  <input className="Input" id="questions" />
</fieldset>
<fieldset className="Fieldset">
  <label className="Label" htmlFor="instructors">
    Instructors
  </label>
  <input className="Input" id="instructors" />
  <label className="Label" htmlFor="category">
      Category
  </label>
  <input className="Input" id="enrollmentstatus"/>
  <label className="Label" htmlFor="enrollmentstatus">
      Enrollment Status
  </label>
  <input className="Input" id="duration"/>
  <label className="Label" htmlFor="duration">
      Duration
  </label>
  <input className="Input" id="duration"/>
  <label className="Label" htmlFor="syllabus">
      Syllabus
  </label>
  <input className="Input" id="syllabus"/>
</fieldset>
<div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
  <button className="Button green">Save changes</button>
</div>
</Tabs.Content>
</Tabs>
