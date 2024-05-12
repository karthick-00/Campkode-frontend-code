import React from 'react'
import './styles.css'

function index() {
  return (
    <div class="point-card" data-aos="zoom-out" data-aos-delay="100">
        <h3>VISION</h3>
        <hr class="underline underline-points" />
        <p>To revolutionize education, we aim to offer accessible, industry-aligned certification courses tailored to diverse learners worldwide. Through our innovative approach and strategic partnerships, we empower individuals to attain the skills and knowledge necessary to fulfill their career aspirations, thereby shaping a more dynamic and inclusive workforce for the future.</p>
    </div>
  )
}

export { index as PointCard }