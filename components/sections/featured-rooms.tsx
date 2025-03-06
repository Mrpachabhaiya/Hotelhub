"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const rooms = [
  {
    id: 1,
    name: "Oceanview Deluxe",
    image:
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    price: "$299",
    description: "Luxurious room with stunning ocean views",
  },
  {
    id: 2,
    name: "Royal Suite",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    price: "$499",
    description: "Spacious suite with premium amenities",
  },
  {
    id: 3,
    name: "Garden Villa",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    price: "$399",
    description: "Private villa surrounded by tropical gardens",
  },
  {
    id: 4,
    name: "Luxury Signature",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    price: "$599",
    description: "Our signature room with exclusive benefits",
  },
];

export default function FeaturedRooms() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            Sleep in Comfort Choose From Our Rooms & Suites
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience ultimate comfort in our thoughtfully designed rooms and
            suites, each offering a perfect blend of luxury and functionality.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {rooms.map((room) => (
              <CarouselItem key={room.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="room-card">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                    <p className="text-muted-foreground mb-4">
                      {room.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary text-xl font-bold">
                        {room.price}
                        <span className="text-sm text-muted-foreground">
                          /night
                        </span>
                      </span>
                      <Button variant="outline">View Details</Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </section>
  );
}
