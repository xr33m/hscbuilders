"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "../lib/utils"
import { Button } from './MovingBorderButton';

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "Our Process",
  autoPlayInterval = 4000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  const handleStepClick = (index: number) => {
    setCurrentFeature(index)
    setProgress(0)
  }

  return (
    <section className={cn("section-padding bg-primary-bg", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 pt-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            From initial consultation to project completion, we follow a proven process 
            to ensure your landscaping project exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 cursor-pointer group"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.4 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleStepClick(index)}
              >
                {/* Step Number/Check */}
                <motion.div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center border-2 flex-shrink-0 transition-all duration-300",
                    index === currentFeature
                      ? "bg-primary-accent border-primary-accent text-white scale-110"
                      : index < currentFeature
                      ? "bg-primary-accent/20 border-primary-accent text-primary-accent"
                      : "bg-secondary-bg border-border-color text-text-secondary group-hover:border-primary-accent/50",
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {index < currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                {/* Step Content */}
                <div className="flex-1 min-w-0">
                  <h3 className={cn(
                    "text-xl font-heading font-semibold mb-2 transition-colors duration-300",
                    index === currentFeature ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                  )}>
                    {feature.title || feature.step}
                  </h3>
                  <p className={cn(
                    "text-sm leading-relaxed transition-colors duration-300",
                    index === currentFeature ? "text-text-secondary" : "text-text-secondary/70"
                  )}>
                    {feature.content}
                  </p>
                  
                  {/* Progress Bar for Current Step */}
                  {index === currentFeature && (
                    <motion.div
                      className="mt-3 h-1 bg-border-color rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.div
                        className="h-full bg-primary-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Display */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-card">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-xl overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -10 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 10 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/60 via-transparent to-transparent" />
                      
                      {/* Step Indicator on Image */}
                      <div className="absolute bottom-6 left-6 bg-primary-accent text-white px-4 py-2 rounded-lg font-semibold">
                        Step {currentFeature + 1}: {feature.title || feature.step}
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-secondary-bg border border-border-color rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-text-secondary mb-6">
              Let's discuss your landscaping vision and create a custom plan that brings your outdoor dreams to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                href="#/contact"
                containerClassName="w-auto h-14"
                className="px-8 py-3 font-bold"
              >
                Get Free Consultation
              </Button>
              <Button
                as="a"
                href="tel:+447490738974"
                containerClassName="w-auto h-14"
                className="px-8 py-3 font-bold"
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function OurProcessSection() {
  const processSteps: Feature[] = [
    {
      step: "Initial Consultation",
      title: "Free Consultation & Site Assessment",
      content: "We visit your property to understand your vision, assess the space, discuss your budget, and provide expert recommendations tailored to your needs.",
      image: "/process-1-home.webp"
    },
    {
      step: "Design & Planning",
      title: "Custom Design Development",
      content: "Our team creates detailed landscape designs with 3D visualizations, material selections, and comprehensive project timelines for your approval.",
      image: "/step2-custom-design-HSC.webp"
    },
    {
      step: "Proposal & Agreement",
      title: "Detailed Proposal & Contract",
      content: "We present a comprehensive proposal with transparent pricing, project scope, timeline, and terms. Once approved, we schedule your project start date.",
      image: "/step3-proposal-home-HSC.webp"
    },
    {
      step: "Project Execution",
      title: "Professional Installation",
      content: "Our skilled team brings your design to life with precision and care, keeping you updated throughout the process and maintaining a clean, safe work environment.",
      image: "/step4-professional-installation-HSC (1).webp"
    },
    {
      step: "Final Walkthrough",
      title: "Quality Inspection & Handover",
      content: "We conduct a thorough walkthrough with you, ensure everything meets our high standards, provide maintenance instructions, and guarantee your complete satisfaction.",
      image: "/handover-step5-HSC.webp"
    }
  ]

  return <FeatureSteps features={processSteps} className="pt-0" />
}