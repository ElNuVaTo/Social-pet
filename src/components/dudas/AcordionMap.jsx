import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AcordionMap = ({ data }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.desc}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AcordionMap;
