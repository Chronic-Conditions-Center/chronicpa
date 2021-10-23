// src/components/standard-page-builder.js

import React from "react"
import CallToAction from "../layouts/CallToAction"
import FullWidthSection from "../layouts/FullWidthSection"
import PageBanner from "../layouts/PageBanner"
import TwoColSection from "../layouts/TwoColSection"

const StandardPageBuilder = ({ layoutData }) => {

  const layoutType = layoutData.fieldGroupName

  /**
   * Default component
   */
  const Default = () => <div>In AllLayouts the mapping of this component is missing: {layoutType}</div>

  /**
   * Mapping the fieldGroupName(s) to our components
   */
  const layouts = {
    Page_Custompagebuilder_PageBuilder_PageBanner: PageBanner,
    Page_Custompagebuilder_PageBuilder_FullWidthSection: FullWidthSection,
    Page_Custompagebuilder_PageBuilder_CallToAction: CallToAction,
    Page_Custompagebuilder_PageBuilder_TwoColumnsImage: TwoColSection,
    page_default: Default
  }

  /**
   * If layout type is not existing in our mapping, it shows our Default instead.
   */
  const ComponentTag = layouts[layoutType] ? layouts[layoutType] : layouts['page_default']

  return (
    <ComponentTag {...layoutData} />
  )
}

export default StandardPageBuilder