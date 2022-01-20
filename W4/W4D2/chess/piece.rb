# class Piece 

#   attr_reader :Board, :symbol, :Array
#   def initialize(color, board, pos)
#     @color = symbol
#     @board = Board.new
#     @pos = []
#   end

# end

class Piece
    attr_reader :symbol

    def initialize(color, board, pos)
        # @symbol = 'Pawn'
        @color = color
        @board = board
        @pos = pos
    end

    def [](pos)
        row, col = pos
        @board[row][col]
    end
    
    def []=(pos, val)
        row, col = pos
        @board[row][col] = val
    end

    def inspect
        # { 'c' => @color, "n" =>self.class }.inspect
        [@color, self.class].inspect
    end

    def moves

    end
end