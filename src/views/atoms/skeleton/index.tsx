import './styles.scss'

interface SkeletonProps {
  width?: string
  height?: string
  className?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '100%',
  className = ''
}) => {
  return (
    <div
      className={`container-app-skeleton ${className} atom`}
      style={{ width, height }}
    ></div>
  )
}
