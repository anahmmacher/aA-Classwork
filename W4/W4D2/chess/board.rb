class Board

  def initialize
    @rows = Array.new(8){Array.new(8)}
  end

  def [](pos)
    row, col = pos
    @rows[row][col]
  end

  def []=(pos, val)
    row, col = pos
    @rows[row][col] = val
  end

  def move_piece(start_pos, end_pos)
    @rows(start_pos), @rows(end_pos) = @rows(end_pos), @rows(start_pos)
  end
end