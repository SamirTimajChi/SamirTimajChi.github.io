---
layout: page
title: The Art of Virtuoso
date: 2024-11-30
description: For wind instrument, keyboard, and string instrument with EMG sensors, contact microphones, and Max/MSP.
category: project
importance: 2
img: assets/img/art-of-virtuoso/score-abstract.jpg
---

## Concept

*Dedicated to Forgotten Sounds*

Have you ever noticed those tiny, almost inaudible sounds during a concert? These sounds could represent voices that are hidden in the crowd and gradually forgotten.

As someone without a background in classical music, I was never fascinated by the complex vertical and horizontal relationships in music, which were literally unrecognizable through listening alone. I also never understood the purpose of a virtuoso performer's extra movements.

However, in my mind, I could imagine sounds that weren't necessarily audible but still existed. I found myself immersed in the imagination of these sounds and felt a connection to them. This experience marked the beginning of my sympathy for these forgotten sounds.

---

## Structure

Three performers (wind instrument + keyboard + string instrument) interpret a score richly layered with Classical Music fragments. These fragments are interspersed throughout, with performers using virtuosic expressive gestures mirroring the emotional depth of the classical compositions.

**EMG sensors** on performers' arms capture muscle tension data, processed in Max/MSP to simulate original fragments on an event-based patch. The piece also includes analog sounds of sleeve rubbing against the body and collar rubbing against the neck, captured through piezoelectric/contact microphones.

Performers' heartbeats and breathing are amplified using wearable devices. The performance culminates in a serene finale where amplified heartbeats and breathing are presented in compositional fragmentation.

{% include figure.liquid path="assets/img/art-of-virtuoso/score-abstract.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="Score (abstract) — fragments in boxes are not meant to be played; only the gesture of playing should be acted out" %}

---

## Technical Implementation

### EMG System

A music control system using an EMG (Electromyography) sensor and Arduino UNO. Three electrodes attach to the arm; the EMG sensor reads muscle electrical signals; Arduino converts them to digital data; Max/MSP turns the signals into sound.

<div class="row mt-3">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/art-of-virtuoso/emg-diagram.png" class="img-fluid rounded z-depth-1" zoomable=true caption="EMG electrode placement diagram" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/art-of-virtuoso/arduino-schematic.jpg" class="img-fluid rounded z-depth-1" zoomable=true caption="Arduino signal flow schematic" %}
  </div>
</div>

**Hardware:** EMG sensor (~€15), Arduino UNO (~€25), 2× 9V batteries (~€5) — total under €50.

**Arduino code:**

```c
int sensorPin = A0;
int sensorValue = 0;
void setup() {
    pinMode(sensorPin, INPUT);
    Serial.begin(9600);
}
void loop() {
    sensorValue = analogRead(sensorPin);
    Serial.println(sensorValue);
    delay(5);
}
```

**Signal latency:** ~5 ms total.

### Max/MSP Patch

<div class="row justify-content-center mt-3">
  <div class="col-sm-6">
    {% include figure.liquid path="assets/img/art-of-virtuoso/maxmsp-patch.png" class="img-fluid rounded z-depth-1" zoomable=true caption="Max/MSP patch — serial input → scaling + smoothing → sound mapping" %}
  </div>
</div>

Signal flow: serial input (9600 baud) → scale 0–1 + smoothing → split into control ranges → map to frequency/amplitude. Strong contractions (>800) trigger lower frequencies; weaker movements control higher tones.

### Body Locations

<div class="row mt-3">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/art-of-virtuoso/body-locations.png" class="img-fluid rounded z-depth-1" zoomable=true caption="EMG body locations tested: finger, arm, leg, face muscles" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/art-of-virtuoso/emg-visualization.png" class="img-fluid rounded z-depth-1" zoomable=true caption="EMG sensor data visualization" %}
  </div>
</div>

---

## Video

{% include video.liquid path="assets/video/art-of-virtuoso/art-of-virtuoso-demo.mp4" class="img-fluid rounded z-depth-1" %}

---

*Samir TimajChi — 30 November 2024*
