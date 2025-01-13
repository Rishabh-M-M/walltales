import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { GlobeDemo } from "../home/World";
import Infinity from "./infinite";

export function TimelineDemo() {
  const data = [
    {
      title: "Global Reach",
      content: (
        <div>
          <GlobeDemo />
        </div>
      ),
    },
    {
      title: "Endless Possiblities",
      content: (
        <div>
          <Infinity />
        </div>
      ),
    },
    {
      title: "Unparalleled Quality",
      content: (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officia nostrum amet reiciendis sed. Laudantium molestiae tempora incidunt praesentium a vel fugit harum illo. Libero numquam voluptate enim neque minus.
          Distinctio enim eos voluptatibus numquam ducimus expedita reprehenderit inventore est, qui id dolores rem itaque odit maxime, excepturi labore magnam culpa dicta, necessitatibus aspernatur tenetur! Quae, repudiandae obcaecati. Maxime, provident.
          Eveniet quas facere iste officia dolor qui, rerum et veniam quibusdam tempora laboriosam consectetur enim impedit nobis? Modi quaerat amet accusamus et quasi recusandae, id ad, eos ullam, dolores accusantium?
          In, eligendi! Dolor beatae voluptatum dignissimos ab esse dolorum voluptates rerum laudantium ad quo quae facilis, aspernatur placeat et quod, at ut, culpa nulla? Facere accusamus natus nulla repudiandae tenetur.
          Eaque dolore veniam dolor id, tempora corrupti ab odit saepe temporibus neque sapiente quidem ea accusantium expedita suscipit, quod repellendus enim facere ipsa necessitatibus consectetur ex. Deserunt sed libero veniam.
          Perferendis architecto totam, odio maxime dolor harum eius modi ducimus suscipit vitae in, ipsam, deleniti aspernatur praesentium labore pariatur dolore doloremque. Facilis magnam saepe praesentium non optio aut distinctio quam?
          Corporis in error quibusdam fugiat rem id temporibus praesentium. Labore aliquid odio distinctio eaque obcaecati ducimus voluptatem nesciunt earum maiores reprehenderit, quis voluptates ratione. Distinctio quis quaerat laudantium. Voluptas, reprehenderit.
          Quasi, non. Maiores sequi mollitia eaque placeat, veniam distinctio similique quisquam delectus voluptatibus vitae laborum quam quia eligendi quaerat, voluptas magni eius excepturi amet quo, explicabo repellat nemo! Nam, veritatis!
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}
